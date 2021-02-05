# Meritts API Test

Repositório destinado para teste técnico na empresa Meritts.

## Instalação

```bash
$ npm install
```

## Rodando a API

```bash
$ npm run start
```

## Provas (Exams)

### Recuperando todas as provas

| Tipo | Rota | Parâmetros | Retorno |
|------|------|------------|---------|
|GET   | /exams | none | Exams[] |

### Recuperando uma prova

| Tipo | Rota | Parâmetros | Retorno |
|------|------|------------|---------|
|GET   | /exams/:id | id | Exams |

### Criando uma prova

| Tipo | Rota | Parâmetros | Retorno |
|------|------|------------|---------|
|POST   | /exams | Exams | Exams |