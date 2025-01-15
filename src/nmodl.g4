/*
MIT License

Copyright (c) 2025 S. Vahid Ghayoomie

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

1. The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

2. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

/*
* Grammar inspired by pynmodl grammar by Boris Marin
*
* https://github.com/borismarin/pynmodl/tree/master/pynmodl/grammar
*/



grammar nmodl;


// Lexer Rules
TIMES
    :   '*'
    ;

DIVIDE
    :   '/'
    ;

PLUS
    :   '+'
    ;

MINUS
    :   '-'
    ;

POWER
    :   '^'
    ;

LPAREN
    :   '('
    ;

RPAREN
    :   ')'
    ;

LBRACE
    :   '{'
    ;

RBRACE
    :   '}'
    ;

LBRACKET
    :   '['
    ;

RBRACKET
    :   ']'
    ;

COMMA
    :   ','
    ;

APOSTROPHE
    :   '\''
    ;

EQUALS
    :   '='
    ;

NOT_EQUALS
    :   '!='
    ;

DOT
    :   '.'
    ;

LESS
    :   '<'
    ;

GREATER
    :   '>'
    ;

COLON
    :   ':'
    ;

ID
    :   [a-zA-Z_][a-zA-Z0-9_]*
    ;

fragment DIGIT
    :   [0-9]
    ;

SIGN
    :   [+-]
    ;

NUMBER
    :   (DIGIT+ ('.' DIGIT*)? | '.' DIGIT+) ([eE] [+-]? DIGIT+)?
    ;

fragment SIGN_NUMBER
    :   [+-]? (DIGIT+ ('.' DIGIT*)? | '.' DIGIT+) ([eE] [+-]? DIGIT+)?
    ;

INT
    :   DIGIT+
    ;

FLOAT
    :   DIGIT+ '.' DIGIT+
    ;

STRING
    :   '"' ~["\r\n]* '"'
    ;

TITLE
    :   'TITLE' ~[\r\n]*
    ;

//TODO: for loop
IF
    :   ('if' | 'IF') WS* '('
    ;

ELSE
    :   ('else' | 'ELSE') WS* '{'
    ;

ELSEIF
    :   ('else if' | 'ELSE IF') WS* '('
    ;

WHILE
    :   ('while' | 'WHILE') WS* '('
    ;

BUILTIN_FUNC
    :   (
            'sin'
            |   'cos'
            |   'tan'
            |   'exp'
            |   'log'
            |   'abs'
            |   'fabs'
            |   'normrand'
            |   'floor'
            |   'scop_random'
            |   'sqrt'
            |   'ceil'
            |   'set_seed'
            |   'pow'
        ) '('
    ;

//TODO: consider patterns like `v(mv)` as units not function. 
// Currently units like `v (mv)` is parsed as unit_id.
USER_FUNC
    :   [a-zA-Z_][a-zA-Z0-9_]+ '('
    ;

fragment UNIT_ID_CHAR
    :   [a-zA-Z0-9._*/^]
    ;

WS
    :   [ \t\r\n]+ -> skip
    ;

LINE_COMMENT
    :   (':' | '?') (~[\r\n])* [\r\n]? -> skip
    ;

COMMENT_BLOCK
    :   'COMMENT' .*? 'ENDCOMMENT' -> skip
    ;

VERBATIM_BLOCK
    :   'VERBATIM' .*? 'ENDVERBATIM' -> skip
    ; //TODO: check if shall not be skipped

PRINTF
    :   'printf' LPAREN STRING (COMMA ~[)]*)* RPAREN -> skip
    ; //TODO: check if shall not be skipped

NEWLINE
    :   [\r\n]
    ;


// Parser Rules

file_
    :   nmodl_block* EOF
    ;

nmodl_block
    :   title
    |   units_ctrl
    |   units_block
    |   neuron_block
    |   parameter_block
    |   constant
    |   assigned_block
    |   state_block
    |   initial
    |   derivative
    |   kinetic
    |   breakpoint
    |   function_table
    |   func_def
    |   local_vars
    |   independent
    |   include
    |   statement
    ;

statement
    :   block
    |   units_ctrl
    |   expression
    |   assignment
    |   if_statement
    |   while_statement
    |   solve
    |   from_statement
    |   table_def
    |   func_def
    |   primed
    |   local_vars
    ;

nrn_stat
    :   threadsafe
    |   suffix
    |   global
    |   range
    |   pointer
    |   point_process
    |   bbcorepointer
    |   random
    |   artificial_cell
    |   external
    |   nonspecific
    |   use_ion
    ;

block

    :   LBRACE statement* RBRACE

    ;

expression

    :   assignment
    |   logical_con

    ;

builtin
    :   BUILTIN_FUNC
    ;

assignment
    :   var_ref EQUALS logical_con
    ;

logical_con
    :   relational (log_con relational)*
    ;

relational
    :   addition (rel_op addition)*
    ;

addition
    :   multiplication (plus_or_minus multiplication)*
    ;

multiplication
    :   exponentiation (mul_or_div exponentiation)*
    ;

exponentiation
    :   negation (exp exponentiation)?
    ;

negation
    :   plus_or_minus? primary
    ;

primary
    :   func_call
    |   paren
    |   num
    |   var_ref
    ;

// Operators
plus_or_minus
    :   PLUS
    |   MINUS
    ;

mul_or_div
    :   TIMES
    |   DIVIDE
    ;

exp
    :   POWER
    ;

rel_op
    :   '<'
    |   '>'
    |   '<='
    |   '>='
    |   '!='
    |   '=='
    ;

log_con
    :   '&&'
    |   '||'
    ;

paren
    :   LPAREN expression RPAREN
    ;

var
    :   local
    |   func_par
    |   variable
    |   func_def
    |   from_counter
    ;

var_ref
    :   var (LBRACKET expression RBRACKET)?
    ;

num
    :   plus_or_minus? NUMBER unit_id?
    ;

signed_num
    :   plus_or_minus? NUMBER
    ;

local
    :   ID (LBRACKET NUMBER RBRACKET)?
    ;

local_vars
    :   'LOCAL' local (COMMA local)*
    ;

func
    :   func_def
    |   function_table
    ;

callable
    :   builtin
    |   func
    ;

func_call
    :   (BUILTIN_FUNC | USER_FUNC) expression? (COMMA expression)* RPAREN
    ;

func_par
    :   (func_call | (ID unit_id?))
    ;

func_def
    :   ('FUNCTION' | 'PROCEDURE') (BUILTIN_FUNC | USER_FUNC) func_par? (
            COMMA func_par
        )* RPAREN unit_id? block
    ;

function_table
    :   'FUNCTION_TABLE' ID LPAREN table_par (COMMA table_par)* RPAREN unit_id?
    ;

table_par
    :   ID unit_id?
    ;

// Block Definitions
neuron_block
    :   'NEURON' LBRACE nrn_stat* RBRACE
    ;

units_block
    :   'UNITS' LBRACE unit_def* RBRACE
    ;

parameter_block
    :   'PARAMETER' LBRACE par_def* RBRACE
    ;

assigned_block
    :   'ASSIGNED' LBRACE assigned_def* RBRACE
    ;

state_block
    :   'STATE' LBRACE state_var* RBRACE
    ;

// Definitions
unit_def
    :   unit_name EQUALS num? base_unit+
    ;

unit_name
    :   ID
    |   unit_id
    ;

unit_id
    :   LPAREN ((signed_num? ('*'|'/'|'^'|'.'|'_'|'-')* (ID|signed_num))* ) RPAREN
    ;

base_unit
    :   unit_id
    ;

par_def
    :   ID (EQUALS num)? unit_id? (LESS num COMMA num GREATER)?
    ;

assigned_def
    :   ID (LBRACKET NUMBER RBRACKET)? unit_id?
    ;

state_var
    :   ID unit_id? (LBRACKET NUMBER (COMMA NUMBER)? RBRACKET)?
    ;

// Kinetic Rules
kinetic
    :   'KINETIC' ID LBRACE kinetic_stat* RBRACE
    ;

kinetic_stat
    :   reaction
    |   flux
    |   compartment
    |   conservation
    |   statement
    ;

reaction
    :   '~' ID '<->' ID LPAREN expression COMMA expression RPAREN
    ;

flux
    :   '~' ID '<<' expression
    ;

compartment
    :   'COMPARTMENT' expression LBRACE ID RBRACE
    ;

conservation
    :   'CONSERVE' expression EQUALS expression
    ;

// Table Related
table_def
    :   'TABLE ' safe_var (COMMA safe_var)* depends? from_st to_st with_st
    ;

depends
    :   'DEPEND ' safe_var (COMMA safe_var)*
    ;

from_st
    :   'FROM ' number_or_var
    ;

to_st
    :   'TO ' number_or_var
    ;

with_st
    :   'WITH ' number_or_var
    ;

float_or_var
    :   FLOAT
    |   INT
    |   ID
    ;

number_or_var
    :   (plus_or_minus? NUMBER)
    |   ID
    ;

v
    :   local
    |   variable
    ;

safe_var
    :   v
    ;

// Control Structures
if_statement
    :   IF expression RPAREN block (ELSEIF expression RPAREN block)* (
            ELSE statement* RBRACE
        )?
    ;

while_statement
    :   'while' expression RPAREN block
    ;

from_statement
    :   'FROM ' from_counter EQUALS expression 'TO ' expression block
    ;

from_counter
    :   ID
    ;

// Solution Methods
initial
    :   'INITIAL' solvable_block
    ;

derivative
    :   'DERIVATIVE' ID block
    ;

breakpoint
    :   'BREAKPOINT' solvable_block
    ;

solvable_block
    :   LBRACE solvable_block_stmt* RBRACE
    ;

solvable_block_stmt
    :   solve
    |   statement
    ;

solve
    :   'SOLVE' ID (('METHOD' | 'STEADYSTATE') method)?
    ;

method
    :   'derivimplicit'
    |   'sparse'
    |   'cnexp'
    |   'euler'
    ;

solvable
    :   derivative
    |   kinetic
    |   func_def
    ;

// Special Declarations
threadsafe
    :   'THREADSAFE'
    ;

suffix
    :   'SUFFIX' ID
    ;

global
    :   'GLOBAL' variable (COMMA variable)*
    ;

range
    :   'RANGE' variable (',' variable)*
    ;

pointer
    :   'POINTER' ID (',' ID)*
    ;

point_process
    :   'POINT_PROCESS' ID (',' ID)*
    ;

bbcorepointer
    :   'BBCOREPOINTER' ID (',' ID)*
    ;

random
    :   'RANDOM' ID (',' ID)*
    ;

artificial_cell
    :   'ARTIFICIAL_CELL' ID (',' ID)*
    ;

external
    :   'EXTERNAL' ID (',' ID)*
    ;

nonspecific
    :   'NONSPECIFIC_CURRENT' ID (',' ID)*
    ;

use_ion
    :   'USEION' ID (read | write | valence)*
    ;

read
    :   'READ' ID (COMMA ID)*
    ;

write
    :   'WRITE' ID (COMMA ID)*
    ;

valence
    :   'VALENCE' num
    ;

// Other Rules
primed
    :   ID APOSTROPHE EQUALS logical_con
    ;

units_ctrl
    :   'UNITSON'
    |   'UNITSOFF'
    ;

title
    :   TITLE
    ;

include
    :   'INCLUDE' STRING
    ;

independent
    :   'INDEPENDENT' LBRACE ID 'FROM ' number_or_var 'TO ' number_or_var 'WITH ' number_or_var (
            'START ' number_or_var
        )? unit_id? RBRACE
    ;

// Variable Types
variable
    :   const_def
    |   assigned_def
    |   par_def
    |   state_var
    ;

constant
    :   'CONSTANT' LBRACE const_def* RBRACE
    ;

const_def
    :   ID (EQUALS num)?
    ;
