//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.addEventListener("click", () => {
	const downloadPromises = images.map((image) =>
		downloadImage(image.url)
);
	Promise.all(downloadPromises)
	.then((downloadedImages) => {
		downloadedImages.forEach((imgElement) => output.appendChild(imgElement));
	})
	.catch((error) => {
		console.log(error);
	});
});

function downloadImage(url){
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.src = url;
		img.onload = () => resolve(img);
		img.onerror = () => reject(new Error(`Failed to load image's URL: ${url}`))
	});
}


