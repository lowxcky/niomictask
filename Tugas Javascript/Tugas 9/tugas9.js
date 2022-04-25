function Object() {
	let siswa = {
        nama : 'Budi',
        kelas : 'IV A',
        tinggi : 160
	}

	console.log(siswa);

	for (var x in siswa) {
		console.log(siswa[x]);
	}
}

Object()