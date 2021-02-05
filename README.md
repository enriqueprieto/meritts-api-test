# Meritts API Test

Repositório destinado para teste técnico na empresa Meritts.

1. [Instalação](#instalacao)
2. [Rodando a API](#rodando-a-api)
3. [Retorno da API](#retorno-da-api)
4. [Provas](#provas)
    1. [Modelo de Dados](#modelo-de-dados-provas)
    2. [Rotas](#modelo-de-dados-provas)
5. [Questões](#questoes-da-prova)
    1. [Modelo de Dados](#modelo-de-dados-questoes)
    2. [Rotas](#modelo-de-dados-questoes)
    
## Instalação

```bash
$ npm install
```

## Rodando a API

```bash
$ npm run start
```

## Retorno da Api

```typescript

interface ApiResponse<T>{
    status:boolean;
    result:T;
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

| Rota       | Tipo     | Parâmetros | Retorno                |
|------------|----------|------------|------------------------|
| /exams     | `GET`    | `none`     | `ApiResponse<Exams[]>` |
| /exams     | `POST`   | `Exams`    | `ApiResponse<Exams>`   |
| /exams/:id | `GET`    | `none`     | `ApiResponse<Exams>`   |
| /exams/:id | `PUT`    | `Exams`    | `ApiResponse<Exams>`   |
| /exams/:id | `DELETE` | `none`     | `ApiResponse<string>`  |

**Obs:** Os retornos citados a cima estará na propriedade `result` do [Retorno da Api](#retorno-da-api).

## Questões da Prova

### Modelo de Dados Questoes

```typescript

interface Question{
    id:string;
    statement: string;
    options: Option[];
}

interface Option{
    id:string;
    key: string;
    value: string;
    correct: boolean;
}

class Questions implements Question{}

class Options implements Option{}

```

### Rotas Questoes

| Rota                                            | Tipo     | Parâmetros  | Retorno                    |
|-------------------------------------------------|----------|-------------|----------------------------|
| /exams/:examId/questions                        | `GET`    | `none`      | `ApiResponse<Questions[]>` |
| /exams/:examId/questions                        | `POST`   | `Questions` | `ApiResponse<Questions>`   |
| /exams/:examId/questions/:id                    | `GET`    | `none`      | `ApiResponse<Questions>`   |
| /exams/:examId/questions/:id                    | `PUT`    | `Questions` | `ApiResponse<Questions>`   |
| /exams/:examId/questions/:id                    | `DELETE` | `none`      | `ApiResponse<string>`      |
| /exams/:examId/questions/:id/options            | `POST`   | `Options`   | `ApiResponse<Exams>`       |
| /exams/:examId/questions/:id/options/:optionId  | `POST`   | `Options`   | `ApiResponse<Exams>`       |
| /exams/:examId/questions/:id/options/:optionId  | `PUT`    | `Options`   | `ApiResponse<Exams>`       |
| /exams/:examId/questions/:id/options/:optionId  | `DELETE` | `none`      | `ApiResponse<string>`      |

**Obs:** Os retornos citados a cima estará na propriedade `result` do [Retorno da Api](#retorno-da-api).
