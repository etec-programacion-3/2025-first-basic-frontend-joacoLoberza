export class editForm {
    constructor(onSubmit) {}

    newForm() {
        return `
        <form>
            <input type=text class=textEditInput placeholder='Nueva Tarea' required/>
            <input type=submit class=submit/>
        </form>
        `
    }
}