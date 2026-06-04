# Agente editorial del blog

Esta carpeta reserva el espacio para el agente que generará borradores periódicos del blog.

El agente ya puede ejecutarse con:

```bash
npm run blog:agent
```

También puede validarse sin llamar a la API:

```bash
npm run blog:agent -- --dry-run
```

## Flujo recomendado

1. El agente toma un brief preaprobado desde `agents/blog-publisher/topics.json`.
2. Lee las instrucciones de `agents/blog-publisher/prompts/system-editorial.md`.
3. Crea un `.mdx` en `content/blog/drafts`.
4. Mantiene `status: "draft"` hasta revisión humana.
5. El workflow `.github/workflows/blog-agent.yml` abre una Pull Request con el borrador.
6. Al aprobarlo, ejecuta `npm run blog:publish -- "slug-del-borrador"` y haz merge para publicar.

## Automatización

El workflow `Blog Agent` se ejecuta cada lunes a las 07:00 UTC y también puede lanzarse manualmente desde GitHub Actions.

Requisitos en GitHub:

- Secret `ANTHROPIC_API_KEY`
- Variable opcional `ANTHROPIC_MODEL` si quieres usar un modelo distinto a `claude-3-5-haiku-20241022`.

## Regla editorial sanitaria

El agente no debe publicar directo. Para este proyecto, el modo seguro es generar borradores y PRs: no prometer pacientes garantizados, resultados clínicos ni métricas no verificadas.
