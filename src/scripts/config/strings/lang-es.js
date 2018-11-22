angular
  .module('editor')
  .constant('LANG_ES', {

    absolute_solution_directive: 'Solución de ejercicio anterior (referencia absoluta)',
    accept: 'Aceptar',
    add_borders: 'Agregar bordes',
    add_choice: 'Agregar opción',
    add_combination: 'Agregar combinación',
    add_exercise: 'Agregar ejercicio',
    add_expectation: 'Agregar expectativa',
    add_item: 'Agregar item',
    add_randomization: 'Agregar valor aleatorio',
    add_rule: 'Agregar regla de asistencia',
    add_smell: 'Ignorar mala práctica',
    add_tag: 'Agregar tag',
    appendix: 'Apéndice',
    assistance_message: 'Mensaje de asistencia',
    assistance_rule_content_empty: 'La solución es vacía',
    assistance_rule_error_contains: 'El mensaje de error contiene',
    assistance_rule_only_these_tests_failed: 'Solamente fallan los siguientes tests ',
    assistance_rule_submission_errored: 'La solución no se pudo ejecutar',
    assistance_rule_submission_failed: 'La solución no pasó las pruebas',
    assistance_rule_submission_passed_with_warnings: 'La solución pasó pero puede mejorarse',
    assistance_rule_these_expectations_failed: 'Alguna de los siguientes expectativas falla',
    assistance_rule_these_tests_failed: 'Alguno de los siguientes tests falla',
    assistance_rules: 'Reglas de asistencia',
    authors: 'Autores',
    binding: 'Contexto',
    black: 'Negro',
    blockquote: 'Cita',
    blue: 'Azul',
    book_already_exists: 'El libro {{fullName}} ya existe en esa organizaión',
    book_fork_fails: 'Ocurrió un error al intentar copiar el libro',
    book_forked_successfully: 'Libro {{fullName}} copiado satisfactoriamente',
    book_saved_successfully: 'Libro guardado satisfactoriamente',
    book: 'Libro',
    books: 'Libros',
    cancel: 'Cancelar',
    chapter: 'Capítulo',
    check_header_position: 'Verificar posición del cabezal',
    choices: 'Opciones',
    code_smell: 'Mala Práctica',
    code_smells: 'Malas Prácticas',
    code: 'Código',
    collaborators: 'Créditos',
    columns: 'Columnas',
    complements: 'Complementos',
    content_directive: 'Solución actual',
    content: 'Contenido',
    copy_book: 'Copiar libro a...',
    copy_book_text: 'Elegí la organización a la que querés copiar el libro',
    copy_guide_text: 'Elegí la organización a la que querés copiar la guía',
    copy_guide: 'Copiar guía a...',
    corollary: 'Corolario',
    custom_editor: "Editor custom",
    default_content: 'Código por defecto',
    delete: 'Borrar',
    delete_confirm: '¿Estás seguro de querer borrar "{{name}}"?',
    delete_success: '"{{fullName}}" fue borrado exitósamente.',
    description: 'Descripción',
    details: 'Ver detalles',
    editor_type: 'Tipo de editor',
    editor: 'Editor',
    english: 'Inglés (UK)',
    error_assistance_rule_validation: '{{fullName}}: Tiene reglas de asistencia inválidas',
    error_choices_empty_validation: '{{fullName}}: Tiene que ofrecer al menos dos opción',
    error_choices_incomplete_validation: '{{fullName}}: Tiene opción incompletas',
    error_editor_code_validation: '{{fullName}}: Debe tener al menos una prueba, una expectativa o su evaluación debe ser manual',
    error_editor_hidden_validation: '{{fullName}}: Debe tener corolario y al menos una prueba',
    error_editor_multiple_choice_validation: '{{fullName}}: Debe seleccionar al menos una opción',
    error_editor_single_choice_validation_no_selected: '{{fullName}}: No debe seleccionar ninguna opción',
    error_editor_single_choice_validation_only_one: '{{fullName}}: Debe seleccionar solamente una opción',
    error_expectations_incomplete_validation: '{{fullName}}: Tiene expectativas incompletas',
    error_forbidden_field: '{{fullName}}: No puede incluir el campo "{{ field }}"',
    error_mandatory_field: '{{fullName}}: El campo "{{ field }}" no puede estar vacío',
    error_queriable_language_validation: '{{ exercise }}: El lenguaje {{ language }} no soporta ejercicios de tipo juego',
    error_triable_language_validation: '{{ exercise }}: El lenguaje {{ language }} no soporta ejercicios interactivos',
    errored: 'Ups, tu solución no funcionó',
    evaluation: 'Evaluación',
    exercise_done: '¡Tu solución pasó todas nuestras pruebas!',
    exercise_type: 'Tipo de ejercicio',
    exercise: 'Ejercicio',
    expectation: 'Expectativa',
    expectations: 'Expectativas',
    extra_code: 'Código extra',
    extra_directive: 'Código extra',
    extra_visible: 'Mostrar código extra',
    extra: 'Código extra',
    failed: 'Ups, algo no anduvo bien',
    final_state: 'Estado Final',
    free_form: 'Formulario Libre',
    from: 'Desde',
    goal_last_query_equals: 'La última consulta es igual a...',
    goal_last_query_fails: 'La última consulta es inválida',
    goal_last_query_matches: 'La última consulta es encaja con...',
    goal_last_query_output_includes: 'El retorno de la última consulta incluye...',
    goal_last_query_output_like: 'El retorno de la última consulta tiene la forma...',
    goal_last_query_outputs: 'La última consulta devuelve...',
    goal_last_query_passes: 'La última consulta es válida',
    goal_placeholder_kind: 'Elija el tipo del objetivo',
    goal_placeholder_output: 'Resultado esperado',
    goal_placeholder_query: 'Consulta ingresada esperada',
    goal_placeholder_regexp: 'Expresión regular',
    goal_placeholder_value: 'Valor ingresado esperado',
    goal_query_fails: 'La consulta es inválida',
    goal_query_outputs: 'La consulta devuelve...',
    goal_query_passes: 'La consulta es válida',
    goal: 'Objetivo',
    gobstones_attire_incomplete: 'Algunas reglas de la vestimenta están incompletas',
    gobstones_attire: 'Vestimenta',
    gobstones_toolbox_commands: 'Comandos',
    gobstones_toolbox_my_functions: 'Mis funciones',
    gobstones_toolbox_my_procedures: 'Mis procedimientos',
    gobstones_toolbox_put: 'Poner',
    gobstones_toolbox: 'Bloques',
    green: 'Verde',
    guide_already_exists: 'La guía {{fullName}} ya existe en esa organizaión',
    guide_fork_fails: 'Ocurrió un error al intentar copiar la guía',
    guide_forked_successfully: 'Guía {{fullName}} copiada satisfactoriamente',
    guide_saved_successfully: 'Guía guardada satisfactoriamente',
    guide_type: 'Tipo de guía',
    guide: 'Guía',
    guides: 'Guías',
    header_x: 'Posición X',
    header_y: 'Posición Y',
    here: 'acá',
    hidden: 'Oculto',
    hint: 'Pista',
    ignore_content_directive: 'Ignorar solución en la consola',
    ignored_code_smells: 'Malas prácticas ignoradas',
    import_guide_from_github: 'Ingresá la organización y el repositorio para importar la guía',
    import: 'Importar',
    initial_state: 'Estado Inicial',
    insert_interpolation: 'Insertar interpolación',
    insert_url: 'Ingresá la URL',
    inspection: 'Inspección',
    inspections: 'Inspecciones',
    interactive: 'Interactivo',
    interpolation: 'Interpolación',
    item: 'Item',
    language: 'Lenguaje',
    layout: 'Disposición del editor',
    learning: 'Aprendizaje',
    leave_current_item_with_changes: 'Tenés cambios sin publicar, que se perderán si abandonás esta pantalla. ¿Querés continuar?',
    lesson: 'Lección',
    license_disclaimer: 'Esta guía será publicada bajo los términos de la <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode">Licencia Creative Commons Compartir-Igual, 4.0</a>. Para aprender más sobre las Licencias Creative Commons visitá <a href="https://creativecommons.org/share-your-work">https://creativecommons.org/share-your-work</a>.',
    link: 'Link',
    locale: 'Idioma',
    login: 'Iniciar sesión',
    logout: 'Cerrar sesión',
    malformed_document: '{{fullName}}: Debe estar en formato {{format}}',
    manual_evaluation: 'Evaluación Manual',
    message: 'Mensaje',
    multiple_choice: 'Selección múltiple',
    multiple_files_new_name: 'Ingresá un nombre de archivo',
    multiple_files: "Múltiples archivos",
    name: 'Nombre',
    negated: 'Negado',
    new_book: 'Nuevo libro',
    new_exercise: 'Nuevo ejercicio',
    new_guide: 'Nueva guía',
    new_topic: 'Nuevo Tema',
    no: 'No',
    object: 'Objeto',
    organization: 'Organización',
    passed_with_warnings: 'Funcionó, pero hay cosas para mejorar',
    passed: 'Todo en orden',
    placeholder_add_chapter: 'Agregar capítulo',
    placeholder_add_complement: 'Agregar complemento',
    placeholder_add_lesson: 'Agregar lección',
    placeholder_appendix: '...Ingrese el apéndice...',
    placeholder_authors: '...Ingrese los autores...',
    placeholder_book_name: '...Nombre del libro...',
    placeholder_collaborators: '...Ingrese los créditos...',
    placeholder_corollary: '...Ingrese el corolario...',
    placeholder_default_content: '...Ingrese el código por defecto...',
    placeholder_description: '...Ingrese la descripción...',
    placeholder_exercise_name: '...Nombre del ejercicio...',
    placeholder_extra_code: '...Ingrese el código extra...',
    placeholder_free_form: '...Ingrese el formulario como un HTML...',
    placeholder_goal: '...Ingrese el objetivo...',
    placeholder_guide_name: '...Nombre de la guía...',
    placeholder_hint: '...Ingrese la pista...',
    placeholder_randomization_word: 'una_palabra',
    placeholder_solution: '...Ingrese la solución a probar...',
    placeholder_teacher_info: '...Ingrese la información del docente...',
    placeholder_test: '...Ingrese las pruebas...',
    placeholder_topic_name: '...Nombre del tema...',
    placeholder_undefined: '',
    playground: 'Juego',
    portuguese: 'Portugués (Br)',
    practice: 'Práctica',
    previous_solution_directive: 'Solución del ejercicio anterior',
    private: 'Oculta',
    problem: 'Problema',
    public: 'Visible',
    randomization_one_of: 'Uno de',
    randomization_range: 'Rango',
    randomizations: 'Valores Aleatorios',
    reading: 'Lectura',
    red: 'Rojo',
    relative_solution_directive: 'Solución de ejercicio anterior (referencia relativa)',
    remove: 'Remover',
    replace: 'Reemplazar',
    repository: 'Repositorio',
    rows: 'Filas',
    rule: 'Regla',
    save: 'Guardar',
    saving: 'Guardando...',
    search: 'Buscar',
    single_choice: 'Selección única',
    solution: 'Solución',
    spanish: 'Español (Arg)',
    subject: 'Sujeto',
    submit: 'Enviar',
    tags: 'Tags',
    target: 'Sujeto',
    teacher_info: 'Información del docente',
    test_directive: 'Pruebas',
    test_input_method: 'Forma de ingreso de test',
    test_results: 'Resultado de las pruebas',
    test_template_group_description: 'Descripción del grupo',
    test_template_sample_description: 'Descripción del ejemplo',
    test_template_suite_description: 'Descripción de la suite',
    test: 'Pruebas',
    text: 'Texto',
    then: 'Entonces',
    to: 'Hasta',
    tooltip_bold: 'Negrita (ctrl+b)',
    tooltip_code: 'Código',
    tooltip_emojis: 'Emoticones',
    tooltip_gbs_attire: 'Vestimenta Gobstones',
    tooltip_gbs_toolbox: 'Bloques Gobstones',
    tooltip_image: 'Imagen',
    tooltip_inline_code: 'Código en línea',
    tooltip_italic: 'Cursiva (ctrl+i)',
    tooltip_link: 'Link (ctrl+k)',
    tooltip_mumuki: 'Mumuki (ctrl+m)',
    tooltip_ol: 'Lista ordenada',
    tooltip_quote: 'Cita',
    tooltip_ul: 'Lista desordenada',
    topic_saved_successfully: 'Tema guardado satisfactoriamente',
    topic: 'Tema',
    topics: 'Temas',
    transitive: 'Transitivo',
    type: 'Tipo',
    unmeet_expectations: 'Objetivos que no se cumplieron',
    upload_image_failed: 'No seleccionaste ninguna imágen o la misma supera los 256 KB',
    upload_image_placeholder: 'Insertá la URL de una imagen',
    upload_now: 'subir',
    upload_text_note: '* Recordá que no puede superar los 256 KB.',
    upload_text: 'Buscá una imagen en tu computadora haciendo click',
    upload: 'Subir archivo',
    user_email: 'Email del usuario',
    user_first_name: 'Nombre del usuario',
    user_last_name: 'Apellido del usuario',
    verb: 'Verbo',
    when: 'Cuando',
    with: 'Con',
    yes: 'Sí',

  });
