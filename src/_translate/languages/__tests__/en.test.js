import { messages } from "../en"

describe("Teste for messages in english language", () => {

    it("Smoke tests", () => {
        expect(messages).toBeDefined()
        expect(messages.en).toBeDefined()
        expect(messages.en.translations).toBeDefined()
    })

    it("Should has no errors when all messages are matched with js file", () => {
        const { en: { translations } } = messages
        expect(translations.buttons.backHome).toEqual("Back to home page")
        expect(translations.buttons.no).toEqual("No")
        expect(translations.buttons.yes).toEqual("Yes")
        expect(translations.label.language).toEqual("Language")
        expect(translations.label.moveTo).toEqual("Move to")
        expect(translations.label.pages).toEqual("Pages")
        expect(translations.label.publishedDate).toEqual("Publish Date")
        expect(translations.label.version).toEqual("Version")
        expect(translations.language.de).toEqual("German")
        expect(translations.language.en).toEqual("English")
        expect(translations.messages.books.updateShelf).toEqual("Do you have sure that you wish do this action?")
        expect(translations.messages.books.updated).toEqual("The book has been moved with success")
        expect(translations.messages.empty).toEqual("List is empty")
        expect(translations.messages.no.data).toEqual("No registers founded")
        expect(translations.placeholders.search).toEqual("Type here to search...")
        expect(translations.subtitles.notFound).toEqual("The URL doesn't match with component none, check if it is correct or try access another address.")
        expect(translations.titles.app).toEqual("My Reads")
        expect(translations.titles.books.action).toEqual("Books API")
        expect(translations.titles.currentlyReading).toEqual("Currently reading")
        expect(translations.titles.notFound).toEqual("Page not found")
        expect(translations.titles.read).toEqual("Reads")
        expect(translations.titles.wantToRead).toEqual("Want to read")
    })

})
