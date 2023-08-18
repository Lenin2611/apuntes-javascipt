/*A number of bids are being taken for a project. Determine the number of distinct
pairs of project costs where their absolute differences is some target value. two
pairs are disctinct if they differ in at least on e value*/

/*Se presentan varias ofertas para un proyecto. Determine el número de pares
pares de costes de proyecto distintos cuyas diferencias absolutas sean un valor objetivo.
pares son distintos si difieren al menos en un valor e */

let projectsCost = [1, 3, 5, 8, 9, 9];
function array(nums) {
    const projects = [];
    let target = 2;
    let n = 3;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != n) {
            projects.push([nums[i], n]);
        } else if (nums[i] != n) {
            projects.push([n, nums[i]]);

        }
    }
    //retornamos el resultado
    return projects;
}

resultado = array(projectsCost);
console.log(resultado);