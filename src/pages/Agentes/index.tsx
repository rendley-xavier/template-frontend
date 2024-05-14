import {
  Avatar,
  Card,
  Flex,
  Image,
  List,
  Pagination,
  Skeleton,
  Space
} from 'antd'
import React, { useEffect, useState } from 'react'
import { AgenteModel } from '../../models/AgenteModel'
import { toast } from 'react-toastify'
import { agenteService } from '../../services/resources/AgentesService'
import Meta from 'antd/es/card/Meta'

const { getAgentes } = agenteService

const Agentes: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [agentes, setAgentes] = useState<AgenteModel[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 5
  const agentesPaginados = agentes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const fetchAgentes = async (): Promise<void> => {
    try {
      setLoading((s) => !s)
      const response = await getAgentes()
      setAgentes(response.data.data)
    } catch (error) {
      console.error(error)
      toast.error('Erro ao carregar lista de agentes!')
      setLoading((s) => !s)
    } finally {
      setLoading((s) => !s)
    }
  }

  useEffect(() => {
    fetchAgentes()
  }, [])

  const handleChangePage = (page: number): void => {
    setCurrentPage(page)
  }

  return (
    <div
      style={{
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 32,
        padding: 16
      }}
    >
      <Flex wrap='wrap' gap='small' style={{ width: '100%' }}>
        {agentesPaginados.map((agente) => (
          <Card
            key={agente.uuid}
            title={
              <Meta
                avatar={
                  !loading ? (
                    <Skeleton.Avatar active />
                  ) : (
                    <Avatar src={agente.displayIconSmall} />
                  )
                }
                title={
                  !loading ? (
                    <Skeleton.Input active />
                  ) : (
                    <p>{agente.displayName}</p>
                  )
                }
              />
            }
            loading={loading}
            hoverable
            style={{
              width: 250,
              background: `linear-gradient(to bottom right, #${agente.backgroundGradientColors[0]}, #${agente.backgroundGradientColors[1]}, #${agente.backgroundGradientColors[2]}, #${agente.backgroundGradientColors[3]})`
            }}
            cover={
              !loading ? (
                <Space
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Skeleton.Image active style={{ width: 250, height: 250 }} />
                </Space>
              ) : (
                <Image alt={agente.displayName} src={agente.fullPortrait} />
              )
            }
          >
            <Space
              direction='vertical'
              size='middle'
              style={{ display: 'flex' }}
            >
              <List
                dataSource={agente.abilities}
                grid={{ gutter: 16, column: 5 }}
                renderItem={(habilidade) => (
                  <Image
                    width={30}
                    preview={false}
                    src={habilidade.displayIcon}
                    alt={habilidade.description}
                  />
                )}
              />
            </Space>
          </Card>
        ))}
      </Flex>
      <Pagination
        current={currentPage}
        total={agentes.length}
        pageSize={itemsPerPage}
        onChange={handleChangePage}
        style={{ textAlign: 'right', marginTop: 16 }}
      />
    </div>
  )
}

export default Agentes
