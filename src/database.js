const JsonQuery = function (json) {
    let data = json;

    this.query = function (searchTerm = []) {
        if (searchTerm.length == 0) return data;

        return data.reduce((result, item) => {
            if (cmp(item, searchTerm))
                result.push(item);
            return result;
        }, []);
    };

    let cmp = (item, searchTerm) => {
        if (Object.keys(searchTerm).length == 1) {
            let key = Object.keys(searchTerm)[0];
            return singelCmp(item[key], searchTerm[key]);
        } else {
            return multiCmp(item, searchTerm);
        }
    };

    let singelCmp = (trait, searchTrait) => {
        if (Array.isArray(trait))
            trait = trait.join(';');

        return trait.toLowerCase().indexOf(searchTrait.toLowerCase()) != -1;
    };

    let multiCmp = (item, searchTerm) => {
        return Object.keys(searchTerm).reduce((bool, key) => {
            return (
                (bool) ? singelCmp(item[key], searchTerm[key]) : false
            );
        }, true);
    };

};


export default JsonQuery;




