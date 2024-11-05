import Tesseract from 'tesseract.js';

export const solveFromImage = async (imageFile: File): Promise<(number | null)[][]> => {
  const { data: { text } } = await Tesseract.recognize(imageFile);
 
  return grid;
};
