function firstImage(noiDung) {
	var regExp = /<img[^>]+src="?([^"\s]+)"?[^>]*\/>/g;
	var results = regExp.exec(noiDung);
<<<<<<< HEAD
	var image = 'http://127.0.0.1:3000/images/noimage.png';
=======
	var image = 'https://trangtin-eypw.onrender.com/images/noimage.png';
>>>>>>> e8320e8 (add)
	if(results) image = results[1];
	return image;
}

module.exports = firstImage;