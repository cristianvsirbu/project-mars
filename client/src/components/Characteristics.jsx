

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
            <div key={key} className="px-6">
                <span className="font-bold">{key}:</span>
                <ol className="text-left">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className={``}
                        >
                            {typeof item === "object" ? (
                                Object.entries(item).map(([subKey, subValue], subIndex) => (
                                    <div key={subIndex}>
                                        <span className="font-medium text-orange-500">{subKey}:</span>
                                        <span className="text-slate-400">{subValue}</span>
                                    </div>
                                ))
                            ) : (
                                item
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        );
    }


    function generateDiv(key, parentKey, hasChildObjects, childData) {
        return (
            <div key={key} className="py-6">
                <span className="font-bold">
                    {parentKey ? `${key}` : key}
                </span>
                <div className={hasChildObjects ? "" : "ml-2"}>
                    {renderCharacteristics(childData, "")}
                </div>
            </div>
        );
    }

    function generateSimpleDiv(key, value) {
        return (
            <div key={key} className="px-6 py-2">
                <div className="flex flex-col text-left">
                    <span className={`text-orange-500 font-medium`}>{key}:</span>
                    <span className="text-slate-400 mb-2">{value}</span>
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
