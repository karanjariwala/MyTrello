const api={
    get:(key)=>Promise.resolve(JSON.parse(localStorage.getItem(key))),
    save:(key,data)=>{
        localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(data));
    }
}

export default api;