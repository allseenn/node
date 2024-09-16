import fs from 'fs';
import * as path from 'path';

const currentDir = path.dirname(new URL(import.meta.url).pathname);
async function save(filename, array) {
    let fileHandle;
    try {
        fileHandle = await fs.promises.open(path.join(currentDir, filename), 'w');
        await fileHandle.writeFile(JSON.stringify(array, null, 2), { encoding: 'utf8' });
    } catch (error) {
        console.error('Ошибка записи данных в файл:', error);
    } finally {
        if (fileHandle) {
            await fileHandle.close();
        }
    }
}

async function read(filename) {
    const array = [];
    let fileHandle;
    try {
        fileHandle = await fs.promises.open(path.join(currentDir, filename), 'r');
        const data = await fileHandle.readFile({ encoding: 'utf8' });
        array.push(...JSON.parse(data));
    } catch (error) {
        console.error('Ошибка чтения данных из файла:', error);
    } finally {
        if (fileHandle) {
            await fileHandle.close();
        }
    }
    return array;
}

async function check(filename) {
    let id = 0;
    let fileHandle;
    try {
        await fs.promises.access(path.join(currentDir, filename));
    } catch (error) {
        if (error.code === 'ENOENT') {
            fileHandle = await fs.promises.open(path.join(currentDir, filename), 'w');
            await fileHandle.writeFile('[]', { encoding: 'utf8' });
        } else {
            throw error;
        }
    }
    if (fileHandle) {
        await fileHandle.close();
    }
    const users = await read(filename);
    id = Math.max(...users.map(u => u.id), 0);
    return id;
}

export default { save, read, check };

