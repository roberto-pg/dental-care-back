type ScheduleModel = {
  doctor_id: string
  doctor_name: string
  specialty: string
  month_day: string
  week_day: string
  hour: string
  patient_name?: string
  cpf?: string
  plain?: string
  card?: string
  scheduled: boolean
  editable: boolean
}

export interface ICreateScheduleRepository {
  execute(newSchedules: ScheduleModel[]): Promise<string>
}
