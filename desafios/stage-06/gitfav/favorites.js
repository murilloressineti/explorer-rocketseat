export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = [
            {
                login: 'murilloressineti',
                name: 'Murillo Ressineti',
                public_repos: '10',
                followers: '10'
            },
            
            {
                login: 'murilloressineti',
                name: 'Murillo Ressineti',
                public_repos: '10',
                followers: '10'
            },
        ]
    }
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
    }

    update() {
        this.removeAllTr()

        this.entries.forEach(user => {
            const row = this.createRow()
            
            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            this.tbody.append(row)
        })
    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `
            <td class="user">
                <img src="https://github.com/murilloressineti.png" alt="Imagem de maykbrito">
                <a href="https://github.com/murilloressineti/" target="_blank">
                <p>Murillo Ressineti</p>
                <span>/murilloressineti</span>
                </a>
            </td>
            <td class="repositories">
            10
            </td>
            <td class="followers">
            10
            </td>
            <td>
            <button class="remove">Remover</button>
            </td>
        `
        return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr').forEach((tr) => {tr.remove()})
    }
}