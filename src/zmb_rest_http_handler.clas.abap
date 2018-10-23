CLASS zmb_rest_http_handler DEFINITION
  PUBLIC
  INHERITING FROM cl_rest_http_handler
  FINAL
  CREATE PUBLIC .

  PUBLIC SECTION.
    METHODS if_rest_application~get_root_handler REDEFINITION .
  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.



CLASS ZMB_REST_HTTP_HANDLER IMPLEMENTATION.


  METHOD if_rest_application~get_root_handler.
    DATA(router) = NEW cl_rest_router( ).
    router->attach( iv_template = `/result.json` iv_handler_class = 'ZMB_REST_SERVICE' ).
    ro_root_handler = router.
  ENDMETHOD.
ENDCLASS.
