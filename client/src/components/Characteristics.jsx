

function Characteristics({ data }) {
  // Recursive function to render characteristics
    function renderCharacteristics(data, parentKey = "") {
        const result = Object.keys(data).map((key) => {
            if (Array.isArray(data[key])) {
                return generateList(key, data[key]);
            }

            if (typeof data[key] === "object") {
                if (!isNaN(key)) {
                    return renderCharacteristics(data[key], parentKey);
                }

                const hasChildObjects = hasChildProperties(data[key]);

                return generateDiv(key, parentKey, hasChildObjects, data[key]);
            } else {
                return generateSimpleDiv(key, data[key]);
            }
        });

        return result;
    }

    function generateList(key, items) {
        return (
            <div key={key} className="px-2">
                <span className="font-semibold text-orange-500">{key}:</span>
                <ol className="text-left text-slate-400">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className={``}
                        >
                            {typeof item === "object" ? (
                                Object.entries(item).map(([subKey, subValue], subIndex) => (
                                    <div key={subIndex} className={`${subKey === "Name" ? "mt-4" : ""} `}>
                                        <span className="font-medium text-orange-500">{subKey}:</span>
                                        <span className={`${subKey === "Name" ? "text-white font-medium" : "text-slate-400"} ml-2`}>
                                            {subValue}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <div className="flex items-center pb-2">
                                    <img src="/assets/star.png" className="w-[3rem] self-baseline" />
                                    {item}
                                </div>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        );
    }


    function generateDiv(key, parentKey, hasChildObjects, childData) {
        return (
            <div key={key} className="py-6 px-2 text-center">
                <span className="font-bold text-2xl">
                    {parentKey ? `${key}` : key}
                </span>
                <div>
                    {renderCharacteristics(childData, "")}
                </div>
            </div>
        );
    }

    function generateSimpleDiv(key, value) {
        return (
            <div key={key} className="px-6 py-2">
                <div className="flex flex-col">
                    <span className={`text-orange-500 font-medium`}>{key}:</span>
                    <span className="text-slate-400">{value}</span>
                </div>
            </div>
        );
    }

    function hasChildProperties(data) {
        return Object.keys(data).some((subKey) => typeof data[subKey] === "object");
    }

    return (
        <div>
            {renderCharacteristics(data)}
        </div>
    );
}

export default Characteristics;
