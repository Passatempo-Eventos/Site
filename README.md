# Passatempo Eventos 🌞 - Projeto Integrador Interdisciplinar (PII)
Passatempo Eventos é um site desenvolvido por alunos do 1º ano do Instituto Mauá de Tecnologia (IMT) em parceria com a ONG Passatempo Educativo, que tem o objetivo de divulgar os  seus eventos e serviços oferecidos.

## Integrantes
| Nome                | R.A.       | Tarefa desempenhada |
| ------------------- | ---------- | ------------------- |
| [Beatriz Diziró de Sant'Anna](https://github.com/BeatrizzzD) | 24.01818-0 | Front-End/Documentação/Prototipação |
| [Giovanna Albuquerque](https://github.com/gioalbuquerque) | 24.01460-5 | Documentação/Prototipação |
| [Guilherme Almeida Amorim da Silva](https://github.com/GuilhermeAlmeida2) | 24.00931-8 | Front-End/Back-End |
| [Mariana Boschetti Castellani](https://github.com/MarianaCastellani) | 24.01664-0 | Documentação/Prototipação |
| [Miguel Gonçalves Sampaio Neto](https://github.com/netomiguel2006) | 24.00927-0 | Front-End/Documentação/Prototipação |
| [Vitor Eiken Tanahara](https://github.com/vitoreiken) | 24.00684-0 | Front-End/Back-End |

## Instalação
### Pré-requisitos
- **[Git](https://git-scm.com/downloads)**
- **[NodeJS](https://nodejs.org)**

Após a instalação de todos os pré-requisitos, já podemos iniciar a instalação do projeto.

1. Abra seu terminal e faça o clone do repositório:
```sh
git clone https://github.com/Passatempo-Eventos/Site
```

2. Entre na pasta **backend** do projeto:
```sh
cd Site/backend
```

3. Mude para a branch do projeto dinâmico:
```sh
git checkout feature/backend
```

4. Instale as dependências do projeto:
```sh
npm install
```

5. Adicione suas credenciais do banco de dados (MongoDB):

- Crie um arquivo **.env** na raiz da pasta *backend*.
- Adicione as variáveis de ambiente ao arquivo:
```ini
#.env
DB_CONEXAO="<sua_string_de_conexao>"
```

6. Inicie o servidor:
```sh
npm start
```

Para abrir o projeto em seu navegador, insira o endereço: `http://localhost:3000/`