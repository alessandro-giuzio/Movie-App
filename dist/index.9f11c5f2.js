const debounce = (func, delay = 1000)=>{
    let timeoutId;
    return (...args)=>{
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(()=>{
            func.apply(null, args);
        }, delay);
    };
};

//# sourceMappingURL=index.9f11c5f2.js.map
