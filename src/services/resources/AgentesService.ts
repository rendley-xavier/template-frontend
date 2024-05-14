import api from '../api'

export const agenteService = {
  async getAgentes() {
    return await api.get('agents', { params: { language: 'pt-BR' } })
  },
  async findAgente(agentId: string) {
    return await api.get(`/agents/${agentId}`)
  }
}
