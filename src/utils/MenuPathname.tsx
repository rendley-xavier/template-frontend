export function getCurrentMenu(pathname: string): string {
  const menuMapping: Record<string, string> = {
    agentes: 'agentes',
    armas: 'armas',
    mapas: 'mapas',
    'titulos-de-cards': 'titulos-de-cards',
    niveis: 'niveis',
    sprays: 'sprays',
    monitoramento: 'monitoramento',
    nucleos: 'nucleos',
    alunos: 'alunos',
    usuarios: 'usuarios',
    'alterar-senha': 'alterar-senha'
  }

  for (const path in menuMapping) {
    if (pathname.includes(path)) {
      return menuMapping[path]
    }
  }

  return ''
}
