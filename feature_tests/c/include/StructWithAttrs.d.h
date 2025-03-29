#ifndef StructWithAttrs_D_H
#define StructWithAttrs_D_H

#include <stdio.h>
#include <stdint.h>
#include <stddef.h>
#include <stdbool.h>
#include "diplomat_runtime.h"





typedef struct StructWithAttrs {
  bool a;
  uint32_t b;
} StructWithAttrs;

typedef struct StructWithAttrs_option {union { StructWithAttrs ok; }; bool is_ok; } StructWithAttrs_option;



#endif // StructWithAttrs_D_H
