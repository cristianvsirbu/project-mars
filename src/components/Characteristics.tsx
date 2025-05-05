import type { Characteristic } from './models/modelsData';

function Characteristics({ data }: any) {
  // Recursive function to render characteristics
  function renderCharacteristics(data: Characteristic, parentKey = ''): React.ReactNode {
    const result = Object.keys(data).map((key) => {
      if (Array.isArray(data[key])) {
        return generateList(key, data[key]);
      }

      if (typeof data[key] === 'object') {
        if (!isNaN(Number(key))) {
          return renderCharacteristics(data[key] as Characteristic, parentKey);
        }

        const hasChildObjects = hasChildProperties(data[key]);

        return generateDiv(key, parentKey, hasChildObjects, data[key] as Characteristic);
      } else {
        return generateSimpleDiv(key, data[key]);
      }
    });

    return result;
  }

  function generateList(key: string, items: any[]) {
    return (
      <div key={key} className="py-2 flex flex-col items-center md:text-2xl xl:items-start">
        <span className="flex font-bold text-orange-600 italic lg:text-2xl mt-8">{key}:</span>
        <ol className="text-slate-500 font-medium w-full">
          {items.map((item, index) => (
            <li key={index} className={`md:max-xl:px-4 xl:px-0 mx-4 xl:mx-0 mt-4`}>
              {typeof item === 'object' ? (
                Object.entries(item).map(([subKey, subValue], subIndex) => (
                  <div
                    key={subIndex}
                    className={`${
                      subKey === 'Name' ? 'mt-8' : ''
                    } flex flex-col xl:items-start px-4`}
                  >
                    <span className="font-semibold text-orange-600">{subKey}:</span>
                    <span
                      className={`${
                        subKey === 'Name'
                          ? 'text-white font-semibold'
                          : 'text-slate-400 xl:text-start'
                      }`}
                    >
                      {String(subValue)}
                    </span>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center xl:flex-row">
                  <img
                    src="/assets/star.webp"
                    className="w-[3rem] xl:w-[4rem]"
                    alt="List Item"
                    loading="lazy"
                  />
                  <div className="xl:text-start">{item}</div>
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    );
  }

  function generateDiv(
    key: string,
    parentKey: string,
    hasChildObjects: boolean,
    childData: Characteristic
  ) {
    return (
      <div key={key} className="mt-4">
        <span className="flex justify-center xl:justify-start font-bold text-2xl md:text-3xl">
          {parentKey ? `${key}` : key}
        </span>
        <div className="">{renderCharacteristics(childData, '')}</div>
      </div>
    );
  }

  function generateSimpleDiv(key: string, value: string | number | boolean) {
    return (
      <div key={key} className="md:text-2xl">
        <div className="flex flex-col items-center xl:items-start xl:text-start">
          <span className={`text-orange-600 font-medium`}>{key}:</span>
          <span className="text-slate-400 font-medium ml-2">{value}</span>
        </div>
      </div>
    );
  }

  function hasChildProperties(data: Record<string, unknown>) {
    return Object.keys(data).some((subKey) => typeof data[subKey] === 'object');
  }

  return <div className="lg:p-16">{renderCharacteristics(data)}</div>;
}

export default Characteristics;
