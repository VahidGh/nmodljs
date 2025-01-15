#!/bin/bash
export CLASSPATH=./dev/g4-output/antlr-complete.jar
if [ -t 0 ]; then
  # Terminal input (stdin is a terminal)
  echo "Input: "
  read user_input
else
  # Pipe or file input, e.g. cat examples/na.mod | bash rule_test.sh
  user_input=$(cat)
fi
java -jar dev/g4-output/antlr-complete.jar -o dev/g4-output nmodl.g4
cd dev/g4-output
javac -cp antlr-complete.jar *.java
echo "$user_input" | java -cp .:antlr-complete.jar org.antlr.v4.gui.TestRig nmodl file_ -gui -tree -long-messages -stdin 