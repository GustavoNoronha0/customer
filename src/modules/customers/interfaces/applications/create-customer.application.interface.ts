import { HttpResponse } from 'src/common/helpers/http';
import { CustomerDomain } from 'src/modules/customers/domain/customer.domain';

export interface CreateCustomerApplicationInterface {
  create(customerDataDomainToCreate: CustomerDomain): Promise<HttpResponse>;
}
