function validateInput(type) {
    const input = document.getElementById(`${type}Input`);
    const validationText = document.getElementById(`${type}Validation`); // Ambil elemen untuk menampilkan status validasi
    let pattern;
    let isValid;

    switch(type) {
        case 'username':
            pattern = /^[a-zA-Z0-9_]{5,}$/; // Format: minimal 5 karakter, hanya huruf, angka, atau underscore
            break;
        case 'nim':
            pattern = /^[0-9]{9}$/; // Format: 10 digit angka
            break;
        case 'birthdate':
            pattern = /^\d{4}-\d{2}-\d{2}$/; // Format: YYYY-MM-DD
            break;
        case 'phone':
            pattern = /^\d{10,12}$/; // Format: 10-12 digit angka
            break;
        case 'email':
            pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Format: Email
            break;
        default:
            pattern = /.*/; // Default pattern (matches anything)
    }

    isValid = pattern.test(input.value);

    if (isValid) {
        input.style.borderColor = 'green';
        validationText.textContent = 'Valid'; // Tampilkan teks 'Valid' jika input valid
        validationText.style.color = 'green'; // Ganti warna teks menjadi hijau
    } else {
        input.style.borderColor = 'red';
        validationText.textContent = 'Tidak Valid'; // Tampilkan teks 'Tidak Valid' jika input tidak valid
        validationText.style.color = 'red'; // Ganti warna teks menjadi merah
    }
}
