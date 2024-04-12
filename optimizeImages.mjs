import fs from 'fs';
import path from 'path';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import {glob} from 'glob';

// Путь к папке с исходными изображениями
const sourceDir = 'src/assets/images';

// Функция для оптимизации изображений в папке и ее подпапках
const optimizeImagesInDirectory = async (dir) => {
  const searchPath = path.join(dir, '**/*.{jpg,png}');
  const files = glob.sync(searchPath, { nodir: true });

  // Обработка каждого найденного файла
  for (const file of files) {
    // Определение относительного пути к файлу внутри папки sourceDir
    const relativePath = path.relative(sourceDir, file);

    // Оптимизация изображения и сохранение в формате webp
    await imagemin([file], {
      destination: path.dirname(file), // Сохраняем в той же папке, что и исходные изображения
      plugins: [
        imageminWebp({ quality: 100 })
      ]
    });

    console.log(`Изображение ${relativePath} оптимизировано и сохранено`);
  }
};

// Вызов функции для оптимизации изображений в папке и ее подпапках
optimizeImagesInDirectory(sourceDir).then(() => {
  console.log('Оптимизация изображений завершена');
}).catch(error => {
  console.error('Ошибка при оптимизации изображений:', error);
});
