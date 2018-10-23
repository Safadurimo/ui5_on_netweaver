CLASS zmb_rest_service DEFINITION
  PUBLIC
  INHERITING FROM cl_rest_resource
  FINAL
  CREATE PUBLIC .

  PUBLIC SECTION.
    METHODS if_rest_resource~get REDEFINITION .
  PROTECTED SECTION.
  PRIVATE SECTION.
   TYPES:
      BEGIN OF result,
        number  TYPE i,
      END OF result.
ENDCLASS.



CLASS ZMB_REST_SERVICE IMPLEMENTATION.


  METHOD if_rest_resource~get.

    DATA(result) = value result( number = 2 ).

    DATA(writer) = cl_sxml_string_writer=>create( type = if_sxml=>co_xt_json ).
    CALL TRANSFORMATION id SOURCE data = result RESULT XML writer.
    DATA(response_entity) = mo_response->create_entity( ).
    response_entity->set_binary_data( writer->get_output( ) ).

  ENDMETHOD.
ENDCLASS.