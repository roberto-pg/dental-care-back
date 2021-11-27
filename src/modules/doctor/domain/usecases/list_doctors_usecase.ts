import 'reflect-metadata'
import { injectable, inject } from 'inversify'
import { IListDoctorsRepository } from '../repositories/list_doctors_repository'
import { TYPES } from '../../../../shared/ioc/types'
import container from '../../../../shared/ioc/inversify_config'
import { customException } from '../../../../shared/errors/custom_exception'

@injectable()
class ListDoctorsUseCase {
  private _repository: IListDoctorsRepository
  constructor(
    @inject(TYPES.ListDoctorsRepositoryImpl)
    private readonly repository: IListDoctorsRepository
  ) {
    this._repository = repository
  }

  async call() {
    try {
      const instanceUseCase = container.resolve(ListDoctorsUseCase)

      const doctors = await instanceUseCase._repository.execute()

      return doctors
    } catch (error) {
      customException('Erro na busca')
    }
  }
}

export { ListDoctorsUseCase }
