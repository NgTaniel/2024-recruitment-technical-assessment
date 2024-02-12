
/**
 * Task 1
 */
function leafFiles(files) {
    // Finding leaf files by comparing two files based on its id and its parent id
    const leafList = [];

    // Base case for empty list
    if (files.length === 0) {
        return [];
    }

    // Using nested loops to denote the comparison for all files in 'testFiles'
    for (let firstFile = 0; firstFile < files.length; firstFile++) {
        let isLeaf = true; 

        // If the comparison finds that a file's id exists as another file's parent id, then the latter is a parent and the flag is set to false, whilst ensuring the files are not comparing themselves
        for (let secondFile = 0; secondFile < files.length; secondFile++) {
            if (firstFile !== secondFile && files[firstFile].id === files[secondFile].parent) {
                // Proceeds to the next object item
                isLeaf = false;
                break;
            }
        }

        // Only file objects whose flag is 'true' gets stored in the array
        if (isLeaf) {
            leafList.push(files[firstFile].name)
        }
    }
    
    // For debugging purposes
    // console.log(leafList);
    return leafList;
}

/**
 * Task 2
 */
function kLargestCategories(files, k) {
    return [];
}

/**
 * Task 3
 */
function largestFileSize(files) {
    return 0;
}


function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

const testFiles = [
    { id: 1, name: "Document.txt", categories: ["Documents"], parent: 3, size: 1024 },
    { id: 2, name: "Image.jpg", categories: ["Media", "Photos"], parent: 34, size: 2048 },
    { id: 3, name: "Folder", categories: ["Folder"], parent: -1, size: 0 },
    { id: 5, name: "Spreadsheet.xlsx", categories: ["Documents", "Excel"], parent: 3, size: 4096 },
    { id: 8, name: "Backup.zip", categories: ["Backup"], parent: 233, size: 8192 },
    { id: 13, name: "Presentation.pptx", categories: ["Documents", "Presentation"], parent: 3, size: 3072 },
    { id: 21, name: "Video.mp4", categories: ["Media", "Videos"], parent: 34, size: 6144 },
    { id: 34, name: "Folder2", categories: ["Folder"], parent: 3, size: 0 },
    { id: 55, name: "Code.py", categories: ["Programming"], parent: -1, size: 1536 },
    { id: 89, name: "Audio.mp3", categories: ["Media", "Audio"], parent: 34, size: 2560 },
    { id: 144, name: "Spreadsheet2.xlsx", categories: ["Documents", "Excel"], parent: 3, size: 2048 },
    { id: 233, name: "Folder3", categories: ["Folder"], parent: -1, size: 4096 },
];

console.assert(arraysEqual(
    leafFiles(testFiles).sort((a, b) => a.localeCompare(b)),
    [
        "Audio.mp3",
        "Backup.zip",
        "Code.py",
        "Document.txt",
        "Image.jpg",
        "Presentation.pptx",
        "Spreadsheet.xlsx",
        "Spreadsheet2.xlsx",
        "Video.mp4"
    ]
));

console.assert(arraysEqual(
    kLargestCategories(testFiles, 3),
    ["Documents", "Folder", "Media"]
));

console.assert(largestFileSize(testFiles) == 20992)
