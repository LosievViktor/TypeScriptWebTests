import path from 'path';
import { test } from './fixtures';
import { Strings } from '../pages/strings';

test.describe('File Upload Tests', () => {
  test('Upload file via Drag and Drop', async ({ loadPage, fileUploadPage }) => {
    // This test goes to the web site and tests File Upload via Drag and Drop.
    await loadPage(Strings.FileUpload);

    const filePath = path.join(__dirname, '..', 'resources', 'file.txt');
    await fileUploadPage.upload(filePath);
    await fileUploadPage.assertUploaded();
  });
});
