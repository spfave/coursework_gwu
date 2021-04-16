const FileIO = require("../fileIO");
const fs = require("fs");

jest.mock("fs");

// Tests
describe("FileIO", () => {
  describe("read", () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // TODO: Your code here
      const fileIO = new FileIO();
      const fileName = "message.txt";
      const fileContent = "Hello World!";

      fs.readFileSync.mockReturnValue(fileContent);

      const fileData = fileIO.read(fileName);

      expect(fileData).toEqual(fileContent);
      expect(fs.readFileSync).lastCalledWith(fileName, "utf8");
    });
  });

  describe("write", () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // TODO: Your code here
      const fileIO = new FileIO();
      const fileName = "message.txt";
      const fileContent = "Hello World!";

      fileIO.write(fileName, fileContent);

      expect(fs.writeFileSync).lastCalledWith(fileName, fileContent);
    });
  });
});
