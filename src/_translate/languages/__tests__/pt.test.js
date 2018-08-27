import { messages } from "../pt"

describe("Teste for messages in portuguese language", () => {

    it("Smoke tests", () => {
        expect(messages).toBeDefined()
        expect(messages.pt).toBeDefined()
        expect(messages.pt.translations).toBeDefined()
    })

    it("Should has no errors when all messages are matched with js file", () => {
        const { pt: { translations } } = messages
        expect(translations.buttons.backHome).toEqual("Voltar para a página principal")
        expect(translations.buttons.no).toEqual("Não")
        expect(translations.buttons.yes).toEqual("Sim")
        expect(translations.label.language).toEqual("Idioma")
        expect(translations.label.moveTo).toEqual("Mover para")
        expect(translations.label.pages).toEqual("Páginas")
        expect(translations.label.publishedDate).toEqual("Data de Publicação")
        expect(translations.label.version).toEqual("Versão")
        expect(translations.language.de).toEqual("Alemão")
        expect(translations.language.en).toEqual("Inglês")
        expect(translations.messages.books.updateShelf).toEqual("Você tem certeza que deseja realizar essa ação?")
        expect(translations.messages.books.updated).toEqual("O livro foi movido com sucesso")
        expect(translations.messages.empty).toEqual("Lista está vázia")
        expect(translations.messages.no.data).toEqual("Nenhum registro encontrado")
        expect(translations.placeholders.search).toEqual("Digite aqui para pesquisar...")
        expect(translations.subtitles.notFound).toEqual("A URL não combina com nenhum componente, verifique se ela está correta ou tente acessar outro endereço.")
        expect(translations.titles.app).toEqual("My Reads")
        expect(translations.titles.books.action).toEqual("Livros API")
        expect(translations.titles.currentlyReading).toEqual("Lendo Atualmente")
        expect(translations.titles.none).toEqual("Nenhuma estante")
        expect(translations.titles.notFound).toEqual("Página não encontrada")
        expect(translations.titles.read).toEqual("Lidos")
        expect(translations.titles.wantToRead).toEqual("Querendo Ler")
    })

})
