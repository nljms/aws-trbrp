// This file is used to override the REST API resources configuration
import { AmplifyApiRestResourceStackTemplate } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyApiRestResourceStackTemplate) {
  resources.restApi.description = "Custom description";
  resources.restApi.minimumCompressionSize = 1024;
}
