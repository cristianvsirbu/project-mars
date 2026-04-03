import { Characteristic } from '../../lib/types';

const Characteristics = ({ data }: { data: Characteristic[] }) => {
  return (
    <div className="text-base lg:text-lg 4k:text-xl lg:max-w-[40%]">
      {data.map(({ label, value }) => (
        <div key={`${label}-${value}`} className="flex flex-wrap">
          <strong className="text-orange-500 mr-2">{label}:</strong>
          <p className="text-slate-400 font-medium">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default Characteristics;
