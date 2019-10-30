// @ts-ignore
import * as SearchDSL from "./src/grammar/SearchDSL";
import * as DSLCombinerTypes from "./src/DSLCombinerTypes";
// @ts-ignore
import * as DSLUtil from "./src/DSLUtil";
// @ts-ignore
import * as DSLUpdateUtil from "./src/DSLUpdateUtil";
// @ts-ignore
import * as DSLFormUtil from "./src/DSLFormUtil";
// @ts-ignore
import * as DSLParserUtil from "./src/DSLParserUtil";

import { default as DSLFilterTypes, FilterType } from "./src/DSLFilterTypes";
// @ts-ignore
import { default as DSLExpression } from "./src/DSLExpression";
// @ts-ignore
import { default as DSLExpressionPart } from "./src/DSLExpressionPart";
// @ts-ignore
import { default as DSLUpdatePolicy } from "./src/DSLUpdatePolicy";
// @ts-ignore
import { ASTNode, CombinerNode, FilterNode } from "./src/DSLASTNodes";

import DSLFilter from "./src/DSLFilter";

const DSLASTNodes = { ASTNode, CombinerNode, FilterNode };

export {
  SearchDSL,
  DSLASTNodes,
  DSLFilter,
  DSLFilterTypes,
  FilterType,
  DSLCombinerTypes,
  DSLExpression,
  DSLExpressionPart,
  DSLFormUtil,
  DSLParserUtil,
  DSLUpdatePolicy,
  DSLUpdateUtil,
  DSLUtil,
};
