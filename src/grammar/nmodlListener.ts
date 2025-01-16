// Generated from nmodl.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { File_Context } from "./nmodlParser.js";
import { Nmodl_blockContext } from "./nmodlParser.js";
import { StatementContext } from "./nmodlParser.js";
import { Nrn_statContext } from "./nmodlParser.js";
import { BlockContext } from "./nmodlParser.js";
import { ExpressionContext } from "./nmodlParser.js";
import { BuiltinContext } from "./nmodlParser.js";
import { AssignmentContext } from "./nmodlParser.js";
import { Logical_conContext } from "./nmodlParser.js";
import { RelationalContext } from "./nmodlParser.js";
import { AdditionContext } from "./nmodlParser.js";
import { MultiplicationContext } from "./nmodlParser.js";
import { ExponentiationContext } from "./nmodlParser.js";
import { NegationContext } from "./nmodlParser.js";
import { PrimaryContext } from "./nmodlParser.js";
import { Plus_or_minusContext } from "./nmodlParser.js";
import { Mul_or_divContext } from "./nmodlParser.js";
import { ExpContext } from "./nmodlParser.js";
import { Rel_opContext } from "./nmodlParser.js";
import { Log_conContext } from "./nmodlParser.js";
import { ParenContext } from "./nmodlParser.js";
import { VarContext } from "./nmodlParser.js";
import { Var_refContext } from "./nmodlParser.js";
import { NumContext } from "./nmodlParser.js";
import { Signed_numContext } from "./nmodlParser.js";
import { LocalContext } from "./nmodlParser.js";
import { Local_varsContext } from "./nmodlParser.js";
import { FuncContext } from "./nmodlParser.js";
import { CallableContext } from "./nmodlParser.js";
import { Func_callContext } from "./nmodlParser.js";
import { Func_parContext } from "./nmodlParser.js";
import { Func_defContext } from "./nmodlParser.js";
import { Function_tableContext } from "./nmodlParser.js";
import { Table_parContext } from "./nmodlParser.js";
import { Neuron_blockContext } from "./nmodlParser.js";
import { Units_blockContext } from "./nmodlParser.js";
import { Parameter_blockContext } from "./nmodlParser.js";
import { Assigned_blockContext } from "./nmodlParser.js";
import { State_blockContext } from "./nmodlParser.js";
import { Unit_defContext } from "./nmodlParser.js";
import { Unit_nameContext } from "./nmodlParser.js";
import { Unit_idContext } from "./nmodlParser.js";
import { Base_unitContext } from "./nmodlParser.js";
import { Par_defContext } from "./nmodlParser.js";
import { Assigned_defContext } from "./nmodlParser.js";
import { State_varContext } from "./nmodlParser.js";
import { KineticContext } from "./nmodlParser.js";
import { Kinetic_statContext } from "./nmodlParser.js";
import { ReactionContext } from "./nmodlParser.js";
import { FluxContext } from "./nmodlParser.js";
import { CompartmentContext } from "./nmodlParser.js";
import { ConservationContext } from "./nmodlParser.js";
import { Table_defContext } from "./nmodlParser.js";
import { DependsContext } from "./nmodlParser.js";
import { From_stContext } from "./nmodlParser.js";
import { To_stContext } from "./nmodlParser.js";
import { With_stContext } from "./nmodlParser.js";
import { Float_or_varContext } from "./nmodlParser.js";
import { Number_or_varContext } from "./nmodlParser.js";
import { VContext } from "./nmodlParser.js";
import { Safe_varContext } from "./nmodlParser.js";
import { If_statementContext } from "./nmodlParser.js";
import { While_statementContext } from "./nmodlParser.js";
import { From_statementContext } from "./nmodlParser.js";
import { From_counterContext } from "./nmodlParser.js";
import { InitialContext } from "./nmodlParser.js";
import { DerivativeContext } from "./nmodlParser.js";
import { BreakpointContext } from "./nmodlParser.js";
import { Solvable_blockContext } from "./nmodlParser.js";
import { Solvable_block_stmtContext } from "./nmodlParser.js";
import { SolveContext } from "./nmodlParser.js";
import { MethodContext } from "./nmodlParser.js";
import { SolvableContext } from "./nmodlParser.js";
import { ThreadsafeContext } from "./nmodlParser.js";
import { SuffixContext } from "./nmodlParser.js";
import { GlobalContext } from "./nmodlParser.js";
import { RangeContext } from "./nmodlParser.js";
import { PointerContext } from "./nmodlParser.js";
import { Point_processContext } from "./nmodlParser.js";
import { BbcorepointerContext } from "./nmodlParser.js";
import { RandomContext } from "./nmodlParser.js";
import { Artificial_cellContext } from "./nmodlParser.js";
import { ExternalContext } from "./nmodlParser.js";
import { NonspecificContext } from "./nmodlParser.js";
import { Use_ionContext } from "./nmodlParser.js";
import { ReadContext } from "./nmodlParser.js";
import { WriteContext } from "./nmodlParser.js";
import { ValenceContext } from "./nmodlParser.js";
import { PrimedContext } from "./nmodlParser.js";
import { Units_ctrlContext } from "./nmodlParser.js";
import { TitleContext } from "./nmodlParser.js";
import { IncludeContext } from "./nmodlParser.js";
import { IndependentContext } from "./nmodlParser.js";
import { VariableContext } from "./nmodlParser.js";
import { ConstantContext } from "./nmodlParser.js";
import { Const_defContext } from "./nmodlParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `nmodlParser`.
 */
export default class nmodlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `nmodlParser.file_`.
	 * @param ctx the parse tree
	 */
	enterFile_?: (ctx: File_Context) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.file_`.
	 * @param ctx the parse tree
	 */
	exitFile_?: (ctx: File_Context) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.nmodl_block`.
	 * @param ctx the parse tree
	 */
	enterNmodl_block?: (ctx: Nmodl_blockContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.nmodl_block`.
	 * @param ctx the parse tree
	 */
	exitNmodl_block?: (ctx: Nmodl_blockContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.nrn_stat`.
	 * @param ctx the parse tree
	 */
	enterNrn_stat?: (ctx: Nrn_statContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.nrn_stat`.
	 * @param ctx the parse tree
	 */
	exitNrn_stat?: (ctx: Nrn_statContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.builtin`.
	 * @param ctx the parse tree
	 */
	enterBuiltin?: (ctx: BuiltinContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.builtin`.
	 * @param ctx the parse tree
	 */
	exitBuiltin?: (ctx: BuiltinContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.logical_con`.
	 * @param ctx the parse tree
	 */
	enterLogical_con?: (ctx: Logical_conContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.logical_con`.
	 * @param ctx the parse tree
	 */
	exitLogical_con?: (ctx: Logical_conContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.relational`.
	 * @param ctx the parse tree
	 */
	enterRelational?: (ctx: RelationalContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.relational`.
	 * @param ctx the parse tree
	 */
	exitRelational?: (ctx: RelationalContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.addition`.
	 * @param ctx the parse tree
	 */
	enterAddition?: (ctx: AdditionContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.addition`.
	 * @param ctx the parse tree
	 */
	exitAddition?: (ctx: AdditionContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.multiplication`.
	 * @param ctx the parse tree
	 */
	enterMultiplication?: (ctx: MultiplicationContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.multiplication`.
	 * @param ctx the parse tree
	 */
	exitMultiplication?: (ctx: MultiplicationContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.exponentiation`.
	 * @param ctx the parse tree
	 */
	enterExponentiation?: (ctx: ExponentiationContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.exponentiation`.
	 * @param ctx the parse tree
	 */
	exitExponentiation?: (ctx: ExponentiationContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.negation`.
	 * @param ctx the parse tree
	 */
	enterNegation?: (ctx: NegationContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.negation`.
	 * @param ctx the parse tree
	 */
	exitNegation?: (ctx: NegationContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.plus_or_minus`.
	 * @param ctx the parse tree
	 */
	enterPlus_or_minus?: (ctx: Plus_or_minusContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.plus_or_minus`.
	 * @param ctx the parse tree
	 */
	exitPlus_or_minus?: (ctx: Plus_or_minusContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.mul_or_div`.
	 * @param ctx the parse tree
	 */
	enterMul_or_div?: (ctx: Mul_or_divContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.mul_or_div`.
	 * @param ctx the parse tree
	 */
	exitMul_or_div?: (ctx: Mul_or_divContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp?: (ctx: ExpContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp?: (ctx: ExpContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.rel_op`.
	 * @param ctx the parse tree
	 */
	enterRel_op?: (ctx: Rel_opContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.rel_op`.
	 * @param ctx the parse tree
	 */
	exitRel_op?: (ctx: Rel_opContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.log_con`.
	 * @param ctx the parse tree
	 */
	enterLog_con?: (ctx: Log_conContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.log_con`.
	 * @param ctx the parse tree
	 */
	exitLog_con?: (ctx: Log_conContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.paren`.
	 * @param ctx the parse tree
	 */
	enterParen?: (ctx: ParenContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.paren`.
	 * @param ctx the parse tree
	 */
	exitParen?: (ctx: ParenContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.var`.
	 * @param ctx the parse tree
	 */
	enterVar?: (ctx: VarContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.var`.
	 * @param ctx the parse tree
	 */
	exitVar?: (ctx: VarContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.var_ref`.
	 * @param ctx the parse tree
	 */
	enterVar_ref?: (ctx: Var_refContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.var_ref`.
	 * @param ctx the parse tree
	 */
	exitVar_ref?: (ctx: Var_refContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.num`.
	 * @param ctx the parse tree
	 */
	enterNum?: (ctx: NumContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.num`.
	 * @param ctx the parse tree
	 */
	exitNum?: (ctx: NumContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.signed_num`.
	 * @param ctx the parse tree
	 */
	enterSigned_num?: (ctx: Signed_numContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.signed_num`.
	 * @param ctx the parse tree
	 */
	exitSigned_num?: (ctx: Signed_numContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.local`.
	 * @param ctx the parse tree
	 */
	enterLocal?: (ctx: LocalContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.local`.
	 * @param ctx the parse tree
	 */
	exitLocal?: (ctx: LocalContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.local_vars`.
	 * @param ctx the parse tree
	 */
	enterLocal_vars?: (ctx: Local_varsContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.local_vars`.
	 * @param ctx the parse tree
	 */
	exitLocal_vars?: (ctx: Local_varsContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.func`.
	 * @param ctx the parse tree
	 */
	enterFunc?: (ctx: FuncContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.func`.
	 * @param ctx the parse tree
	 */
	exitFunc?: (ctx: FuncContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.callable`.
	 * @param ctx the parse tree
	 */
	enterCallable?: (ctx: CallableContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.callable`.
	 * @param ctx the parse tree
	 */
	exitCallable?: (ctx: CallableContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.func_call`.
	 * @param ctx the parse tree
	 */
	enterFunc_call?: (ctx: Func_callContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.func_call`.
	 * @param ctx the parse tree
	 */
	exitFunc_call?: (ctx: Func_callContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.func_par`.
	 * @param ctx the parse tree
	 */
	enterFunc_par?: (ctx: Func_parContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.func_par`.
	 * @param ctx the parse tree
	 */
	exitFunc_par?: (ctx: Func_parContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.func_def`.
	 * @param ctx the parse tree
	 */
	enterFunc_def?: (ctx: Func_defContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.func_def`.
	 * @param ctx the parse tree
	 */
	exitFunc_def?: (ctx: Func_defContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.function_table`.
	 * @param ctx the parse tree
	 */
	enterFunction_table?: (ctx: Function_tableContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.function_table`.
	 * @param ctx the parse tree
	 */
	exitFunction_table?: (ctx: Function_tableContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.table_par`.
	 * @param ctx the parse tree
	 */
	enterTable_par?: (ctx: Table_parContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.table_par`.
	 * @param ctx the parse tree
	 */
	exitTable_par?: (ctx: Table_parContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.neuron_block`.
	 * @param ctx the parse tree
	 */
	enterNeuron_block?: (ctx: Neuron_blockContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.neuron_block`.
	 * @param ctx the parse tree
	 */
	exitNeuron_block?: (ctx: Neuron_blockContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.units_block`.
	 * @param ctx the parse tree
	 */
	enterUnits_block?: (ctx: Units_blockContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.units_block`.
	 * @param ctx the parse tree
	 */
	exitUnits_block?: (ctx: Units_blockContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.parameter_block`.
	 * @param ctx the parse tree
	 */
	enterParameter_block?: (ctx: Parameter_blockContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.parameter_block`.
	 * @param ctx the parse tree
	 */
	exitParameter_block?: (ctx: Parameter_blockContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.assigned_block`.
	 * @param ctx the parse tree
	 */
	enterAssigned_block?: (ctx: Assigned_blockContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.assigned_block`.
	 * @param ctx the parse tree
	 */
	exitAssigned_block?: (ctx: Assigned_blockContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.state_block`.
	 * @param ctx the parse tree
	 */
	enterState_block?: (ctx: State_blockContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.state_block`.
	 * @param ctx the parse tree
	 */
	exitState_block?: (ctx: State_blockContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.unit_def`.
	 * @param ctx the parse tree
	 */
	enterUnit_def?: (ctx: Unit_defContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.unit_def`.
	 * @param ctx the parse tree
	 */
	exitUnit_def?: (ctx: Unit_defContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.unit_name`.
	 * @param ctx the parse tree
	 */
	enterUnit_name?: (ctx: Unit_nameContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.unit_name`.
	 * @param ctx the parse tree
	 */
	exitUnit_name?: (ctx: Unit_nameContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.unit_id`.
	 * @param ctx the parse tree
	 */
	enterUnit_id?: (ctx: Unit_idContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.unit_id`.
	 * @param ctx the parse tree
	 */
	exitUnit_id?: (ctx: Unit_idContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.base_unit`.
	 * @param ctx the parse tree
	 */
	enterBase_unit?: (ctx: Base_unitContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.base_unit`.
	 * @param ctx the parse tree
	 */
	exitBase_unit?: (ctx: Base_unitContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.par_def`.
	 * @param ctx the parse tree
	 */
	enterPar_def?: (ctx: Par_defContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.par_def`.
	 * @param ctx the parse tree
	 */
	exitPar_def?: (ctx: Par_defContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.assigned_def`.
	 * @param ctx the parse tree
	 */
	enterAssigned_def?: (ctx: Assigned_defContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.assigned_def`.
	 * @param ctx the parse tree
	 */
	exitAssigned_def?: (ctx: Assigned_defContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.state_var`.
	 * @param ctx the parse tree
	 */
	enterState_var?: (ctx: State_varContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.state_var`.
	 * @param ctx the parse tree
	 */
	exitState_var?: (ctx: State_varContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.kinetic`.
	 * @param ctx the parse tree
	 */
	enterKinetic?: (ctx: KineticContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.kinetic`.
	 * @param ctx the parse tree
	 */
	exitKinetic?: (ctx: KineticContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.kinetic_stat`.
	 * @param ctx the parse tree
	 */
	enterKinetic_stat?: (ctx: Kinetic_statContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.kinetic_stat`.
	 * @param ctx the parse tree
	 */
	exitKinetic_stat?: (ctx: Kinetic_statContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.reaction`.
	 * @param ctx the parse tree
	 */
	enterReaction?: (ctx: ReactionContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.reaction`.
	 * @param ctx the parse tree
	 */
	exitReaction?: (ctx: ReactionContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.flux`.
	 * @param ctx the parse tree
	 */
	enterFlux?: (ctx: FluxContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.flux`.
	 * @param ctx the parse tree
	 */
	exitFlux?: (ctx: FluxContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.compartment`.
	 * @param ctx the parse tree
	 */
	enterCompartment?: (ctx: CompartmentContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.compartment`.
	 * @param ctx the parse tree
	 */
	exitCompartment?: (ctx: CompartmentContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.conservation`.
	 * @param ctx the parse tree
	 */
	enterConservation?: (ctx: ConservationContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.conservation`.
	 * @param ctx the parse tree
	 */
	exitConservation?: (ctx: ConservationContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.table_def`.
	 * @param ctx the parse tree
	 */
	enterTable_def?: (ctx: Table_defContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.table_def`.
	 * @param ctx the parse tree
	 */
	exitTable_def?: (ctx: Table_defContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.depends`.
	 * @param ctx the parse tree
	 */
	enterDepends?: (ctx: DependsContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.depends`.
	 * @param ctx the parse tree
	 */
	exitDepends?: (ctx: DependsContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.from_st`.
	 * @param ctx the parse tree
	 */
	enterFrom_st?: (ctx: From_stContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.from_st`.
	 * @param ctx the parse tree
	 */
	exitFrom_st?: (ctx: From_stContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.to_st`.
	 * @param ctx the parse tree
	 */
	enterTo_st?: (ctx: To_stContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.to_st`.
	 * @param ctx the parse tree
	 */
	exitTo_st?: (ctx: To_stContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.with_st`.
	 * @param ctx the parse tree
	 */
	enterWith_st?: (ctx: With_stContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.with_st`.
	 * @param ctx the parse tree
	 */
	exitWith_st?: (ctx: With_stContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.float_or_var`.
	 * @param ctx the parse tree
	 */
	enterFloat_or_var?: (ctx: Float_or_varContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.float_or_var`.
	 * @param ctx the parse tree
	 */
	exitFloat_or_var?: (ctx: Float_or_varContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.number_or_var`.
	 * @param ctx the parse tree
	 */
	enterNumber_or_var?: (ctx: Number_or_varContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.number_or_var`.
	 * @param ctx the parse tree
	 */
	exitNumber_or_var?: (ctx: Number_or_varContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.v`.
	 * @param ctx the parse tree
	 */
	enterV?: (ctx: VContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.v`.
	 * @param ctx the parse tree
	 */
	exitV?: (ctx: VContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.safe_var`.
	 * @param ctx the parse tree
	 */
	enterSafe_var?: (ctx: Safe_varContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.safe_var`.
	 * @param ctx the parse tree
	 */
	exitSafe_var?: (ctx: Safe_varContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.if_statement`.
	 * @param ctx the parse tree
	 */
	enterIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.if_statement`.
	 * @param ctx the parse tree
	 */
	exitIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.while_statement`.
	 * @param ctx the parse tree
	 */
	enterWhile_statement?: (ctx: While_statementContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.while_statement`.
	 * @param ctx the parse tree
	 */
	exitWhile_statement?: (ctx: While_statementContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.from_statement`.
	 * @param ctx the parse tree
	 */
	enterFrom_statement?: (ctx: From_statementContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.from_statement`.
	 * @param ctx the parse tree
	 */
	exitFrom_statement?: (ctx: From_statementContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.from_counter`.
	 * @param ctx the parse tree
	 */
	enterFrom_counter?: (ctx: From_counterContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.from_counter`.
	 * @param ctx the parse tree
	 */
	exitFrom_counter?: (ctx: From_counterContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.initial`.
	 * @param ctx the parse tree
	 */
	enterInitial?: (ctx: InitialContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.initial`.
	 * @param ctx the parse tree
	 */
	exitInitial?: (ctx: InitialContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.derivative`.
	 * @param ctx the parse tree
	 */
	enterDerivative?: (ctx: DerivativeContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.derivative`.
	 * @param ctx the parse tree
	 */
	exitDerivative?: (ctx: DerivativeContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.breakpoint`.
	 * @param ctx the parse tree
	 */
	enterBreakpoint?: (ctx: BreakpointContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.breakpoint`.
	 * @param ctx the parse tree
	 */
	exitBreakpoint?: (ctx: BreakpointContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.solvable_block`.
	 * @param ctx the parse tree
	 */
	enterSolvable_block?: (ctx: Solvable_blockContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.solvable_block`.
	 * @param ctx the parse tree
	 */
	exitSolvable_block?: (ctx: Solvable_blockContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.solvable_block_stmt`.
	 * @param ctx the parse tree
	 */
	enterSolvable_block_stmt?: (ctx: Solvable_block_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.solvable_block_stmt`.
	 * @param ctx the parse tree
	 */
	exitSolvable_block_stmt?: (ctx: Solvable_block_stmtContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.solve`.
	 * @param ctx the parse tree
	 */
	enterSolve?: (ctx: SolveContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.solve`.
	 * @param ctx the parse tree
	 */
	exitSolve?: (ctx: SolveContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.method`.
	 * @param ctx the parse tree
	 */
	enterMethod?: (ctx: MethodContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.method`.
	 * @param ctx the parse tree
	 */
	exitMethod?: (ctx: MethodContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.solvable`.
	 * @param ctx the parse tree
	 */
	enterSolvable?: (ctx: SolvableContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.solvable`.
	 * @param ctx the parse tree
	 */
	exitSolvable?: (ctx: SolvableContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.threadsafe`.
	 * @param ctx the parse tree
	 */
	enterThreadsafe?: (ctx: ThreadsafeContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.threadsafe`.
	 * @param ctx the parse tree
	 */
	exitThreadsafe?: (ctx: ThreadsafeContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.suffix`.
	 * @param ctx the parse tree
	 */
	enterSuffix?: (ctx: SuffixContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.suffix`.
	 * @param ctx the parse tree
	 */
	exitSuffix?: (ctx: SuffixContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.global`.
	 * @param ctx the parse tree
	 */
	enterGlobal?: (ctx: GlobalContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.global`.
	 * @param ctx the parse tree
	 */
	exitGlobal?: (ctx: GlobalContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.range`.
	 * @param ctx the parse tree
	 */
	enterRange?: (ctx: RangeContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.range`.
	 * @param ctx the parse tree
	 */
	exitRange?: (ctx: RangeContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.pointer`.
	 * @param ctx the parse tree
	 */
	enterPointer?: (ctx: PointerContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.pointer`.
	 * @param ctx the parse tree
	 */
	exitPointer?: (ctx: PointerContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.point_process`.
	 * @param ctx the parse tree
	 */
	enterPoint_process?: (ctx: Point_processContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.point_process`.
	 * @param ctx the parse tree
	 */
	exitPoint_process?: (ctx: Point_processContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.bbcorepointer`.
	 * @param ctx the parse tree
	 */
	enterBbcorepointer?: (ctx: BbcorepointerContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.bbcorepointer`.
	 * @param ctx the parse tree
	 */
	exitBbcorepointer?: (ctx: BbcorepointerContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.random`.
	 * @param ctx the parse tree
	 */
	enterRandom?: (ctx: RandomContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.random`.
	 * @param ctx the parse tree
	 */
	exitRandom?: (ctx: RandomContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.artificial_cell`.
	 * @param ctx the parse tree
	 */
	enterArtificial_cell?: (ctx: Artificial_cellContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.artificial_cell`.
	 * @param ctx the parse tree
	 */
	exitArtificial_cell?: (ctx: Artificial_cellContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.external`.
	 * @param ctx the parse tree
	 */
	enterExternal?: (ctx: ExternalContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.external`.
	 * @param ctx the parse tree
	 */
	exitExternal?: (ctx: ExternalContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.nonspecific`.
	 * @param ctx the parse tree
	 */
	enterNonspecific?: (ctx: NonspecificContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.nonspecific`.
	 * @param ctx the parse tree
	 */
	exitNonspecific?: (ctx: NonspecificContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.use_ion`.
	 * @param ctx the parse tree
	 */
	enterUse_ion?: (ctx: Use_ionContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.use_ion`.
	 * @param ctx the parse tree
	 */
	exitUse_ion?: (ctx: Use_ionContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.read`.
	 * @param ctx the parse tree
	 */
	enterRead?: (ctx: ReadContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.read`.
	 * @param ctx the parse tree
	 */
	exitRead?: (ctx: ReadContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.write`.
	 * @param ctx the parse tree
	 */
	enterWrite?: (ctx: WriteContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.write`.
	 * @param ctx the parse tree
	 */
	exitWrite?: (ctx: WriteContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.valence`.
	 * @param ctx the parse tree
	 */
	enterValence?: (ctx: ValenceContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.valence`.
	 * @param ctx the parse tree
	 */
	exitValence?: (ctx: ValenceContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.primed`.
	 * @param ctx the parse tree
	 */
	enterPrimed?: (ctx: PrimedContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.primed`.
	 * @param ctx the parse tree
	 */
	exitPrimed?: (ctx: PrimedContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.units_ctrl`.
	 * @param ctx the parse tree
	 */
	enterUnits_ctrl?: (ctx: Units_ctrlContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.units_ctrl`.
	 * @param ctx the parse tree
	 */
	exitUnits_ctrl?: (ctx: Units_ctrlContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.title`.
	 * @param ctx the parse tree
	 */
	enterTitle?: (ctx: TitleContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.title`.
	 * @param ctx the parse tree
	 */
	exitTitle?: (ctx: TitleContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.include`.
	 * @param ctx the parse tree
	 */
	enterInclude?: (ctx: IncludeContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.include`.
	 * @param ctx the parse tree
	 */
	exitInclude?: (ctx: IncludeContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.independent`.
	 * @param ctx the parse tree
	 */
	enterIndependent?: (ctx: IndependentContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.independent`.
	 * @param ctx the parse tree
	 */
	exitIndependent?: (ctx: IndependentContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;
	/**
	 * Enter a parse tree produced by `nmodlParser.const_def`.
	 * @param ctx the parse tree
	 */
	enterConst_def?: (ctx: Const_defContext) => void;
	/**
	 * Exit a parse tree produced by `nmodlParser.const_def`.
	 * @param ctx the parse tree
	 */
	exitConst_def?: (ctx: Const_defContext) => void;
}

