let dataPanen = JSON.parse(localStorage.getItem("dataPanen")) || [];

function tampilkanData(){

let tabel = document.getElementById("tabelPanen");
tabel.innerHTML="";

dataPanen.forEach((data,index)=>{

let row = `
<tr>
<td>${data.tanggal}</td>
<td>${data.petani}</td>
<td>${data.komoditas}</td>
<td>${data.jumlah} ${data.satuan}</td>
<td>${data.lokasi}</td>
<td>
<button class="delete-btn" onclick="hapusData(${index})">Hapus</button>
</td>
</tr>
`;

tabel.innerHTML += row;

});

}

document.getElementById("panenForm").addEventListener("submit",function(e){

e.preventDefault();

let data = {

tanggal:document.getElementById("tanggal").value,
petani:document.getElementById("petani").value,
komoditas:document.getElementById("komoditas").value,
jumlah:document.getElementById("jumlah").value,
satuan:document.getElementById("satuan").value,
lokasi:document.getElementById("lokasi").value

};

dataPanen.push(data);

localStorage.setItem("dataPanen",JSON.stringify(dataPanen));

tampilkanData();

this.reset();

});

function hapusData(index){

dataPanen.splice(index,1);

localStorage.setItem("dataPanen",JSON.stringify(dataPanen));

tampilkanData();

}

tampilkanData();