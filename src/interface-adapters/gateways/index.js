import { createBudgetGateway } from './budget'
import { createUserGateway } from './user'

const baseUrl = 'http://localhost:8081'

export const budgetGateway = createBudgetGateway({ baseUrl, fetch: fetch })
export const userGateway = createUserGateway({ baseUrl, fetch: fetch })