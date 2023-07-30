function permuting2Arrays(k, A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    console.log(A, B);
  
    for (let i = 0; i < A.length; i++) {
      if (A[i] + B[A.length - 1 - i] < k) {
        return "NO";
      }
    }
    return "YES";
  }
  
//   const k = 5;
//   const A = [1, 2, 2, 1];
//   const B = [3, 3, 3, 4];

  const k = 10;
  const A = [2,1,3];
  const B = [7,8,9];
  
  console.log(permuting2Arrays(k, A, B));
  