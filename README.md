# Meritts API Test

Repositório destinado para teste técnico na empresa Meritts.

1. [Instalação](#instalacao)
2. [Rodando a API](#rodando-a-api)
3. [Retorno da API](#retorno-da-api)
4. [Provas](#provas)
    1. [Modelo de Dados](#modelo-de-dados-provas)
    2. [Rotas](#modelo-de-dados-provas)
    
## Instalação

```bash
$ npm install
```

## Rodando a API

```bash
$ npm run start
```

## Retorno da Api

```json
{
    "status": true, //retorno booleano
    "result": {} //modelo de dados podendo ser Exam, Question ou Option
}
```

## Provas

### Modelo de Dados Provas

```typescript
type ExamType = 'ONLINE' | 'OFFLINE';

interface Exam{
    id:string;
    name:string;
    description:string;
    type:ExamType;
    questions:Questions[];
}

class Exams implements Exam{}
```

### Rotas Provas

| Rota       | Tipo     | Parâmetros | Retorno   |
|------------|----------|------------|-----------|
| /exams     | `GET`    | `none`     | `Exams[]` |
| /exams     | `POST`   | `Exams`    | `Exams`   |
| /exams/:id | `GET`    | `none`     | `Exams`   |
| /exams/:id | `PUT`    | `Exams`    | `Exams`   |
| /exams/:id | `DELETE` | `none`     | `string`  |

**Obs:** Os retornos citados a cima estará na propriedade `result` do [Retorno da Api](#retorno-da-api).
