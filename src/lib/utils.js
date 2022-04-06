export function getCategories  (arr, data) {
   return arr.map(m => {
     return (data.find(d => d.name === m)).category;
   });
 };

export function getCategoryFor (p, data) {
   const [item] = data.filter(d => d.name === p);
   return item ? item.category : 'unknown';
};
