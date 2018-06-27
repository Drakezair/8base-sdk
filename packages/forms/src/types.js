// @flow
import type { FormProps as FinalFormProps, FieldProps as FinalFieldProps } from 'react-final-form';
import type { FieldArrayProps as FinalFieldArrayProps } from 'react-final-form-arrays';

type FieldType = 'TEXT' | 'NUMBER' | 'DATE' | 'SWITCH' | 'ID';

type FieldSchema = {
  name: string,
  displayName?: string,
  description: ?string,
  fieldType: FieldType,
  fieldTypeAttributes: Object,
  isList: boolean,
  isRequired: boolean,
  isUnique: boolean,
  defaultValue: any,
  relation: ?Object,
};

type TableSchema = {
  name: string,
  displayName?: string,
  isSystem: boolean,
  fields: Array<FieldSchema>,
};

type Schema = Array<TableSchema>;

type SchemaContextValue = Schema;

type RenderableProps = {
  component?: React$ComponentType<any>,
  children?: ((props: Object) => React$Node) | React$Node,
  render?: (props: Object) => React$Node
};

type FormContextValue = {|
  tableSchema: TableSchema,
|};

type FormProps = {
  tableSchema: TableSchema,
} & FinalFormProps;

type FieldsetProps = {
  tableSchema: TableSchema,
  children: React$Node,
} & RenderableProps;

type FieldProps = {
  fieldSchema: FieldSchema,
} & FinalFieldProps;

type FieldArrayProps = FinalFieldArrayProps;

export type {
  FieldArrayProps,
  FieldProps,
  FieldSchema,
  FieldsetProps,
  FieldType,
  FormContextValue,
  FormProps,
  Schema,
  SchemaContextValue,
  TableSchema,
  RenderableProps,
};
