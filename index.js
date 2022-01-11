const root = document.querySelector(".root");
function Main(){
    // clean kết quả cũ
    root.innerHTML = "";
    // biến lấy giá trị hệ nhị phân, thập phân, thập lục phân từ select
    const b = document.querySelector("#heso");
    // giá trị nhập vào
    let N = Number(document.querySelector("#input_N").value);
    // mảng định sẵn
    let a = Array(8);
    // biến dùng để tính nhị phân, bát phân và thập lục phân
    let sodu = 0;
    // biến i chạy trong do while
    let i = 0;

    if(b.value == 10){
        // Chuyển đổi thành mảng chứa các nhị phân
        a = N.toString().split("");
        // chứa kết quả
        let res = 0;
        // lấy length của mảng
        let n = N.toString().length;
        // tượng trưng hệ nhị phân
        let b = 2;
        for(let i = 0; i < n; i++){
            // In ra trong phần console ở Developer Tools trên trình duyệt
           console.log(`${a[i]} x ${n - i - 1} = ${a[i] * Math.pow(b, n - i - 1)}`);
           res += a[i] * Math.pow(b, n - i - 1);
        }
        // Chuyển đổi kiểu dữ liệu của kết quả thành mảng và đảo chiều nó để gán vào mảng a 
        a = res.toString().split("").reverse();
    }
    // Trường hợp ngược lại, khi muốn đổi thập phân thành nhị phân, bát phân hoặc thập lục phân
    else{
        do{
            sodu = N % b.value;
            a[i++] = Math.floor(sodu);
            N = Math.floor(N/b.value);
        }
        while(N != 0)
    }
    // Đảo chiều mảng
    let res = a.reverse();
    // Sử dụng function array ForEach để in từng phần tử ra
    res.forEach((val)=>{
        if(b.value == 16){
            switch(val){
                case 10:
                    val = "A"
                    break
                case 11:
                    val = "B"
                    break
                case 12: 
                    val = "C"
                    break
                case 13: 
                    val = "D"
                    break
                case 14: 
                    val = "E"
                    break
                case 15: 
                    val = "G"
                    break
                case 16:
                    val = "H"
                    break
                default:
                    val = val;
                    break;
            }
        }
        root.innerHTML += val;
    })
}

