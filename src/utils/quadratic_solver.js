export function quadratic_solver(coefficients) {
    let {coefficient_a, coefficient_b, coefficient_c} = {...coefficients}

    let determinant = (coefficient_b**2) - (4*coefficient_a*coefficient_c)

    if (determinant == 0){
        let answer = -coefficient_b/(2*coefficient_a)
        return [answer]
    }else if (determinant > 0){
        let answer1 = (-coefficient_b+Math.sqrt(determinant))/(2*coefficient_a)
        let answer2 = (-coefficient_b-Math.sqrt(determinant))/(2*coefficient_a)
        return [answer1, answer2]
    }else{
        return "Complex solution"
    }


}