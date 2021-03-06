angular
  .module('editor')
  .constant('LANG_EN', {

    absolute_solution_directive: 'Previous exercise solution (absolute reference)',
    accept: 'Accept',
    add_borders: 'Add borders',
    add_choice: 'Add choice',
    add_combination: 'Add combination',
    add_exercise: 'Add exercise',
    add_expectation: 'Add expectation',
    add_item: 'Add item',
    add_randomization: 'Add randomization',
    add_rule: 'Add assistance rule',
    add_smell: 'Ignore smell',
    add_tag: 'Add tag',
    appendix: 'Appendix',
    assistance_message: 'Assistance message',
    assistance_rule_content_empty: 'Content is empty',
    assistance_rule_error_contains: 'Error message contains',
    assistance_rule_only_these_tests_failed: 'Only these tests failed',
    assistance_rule_submission_errored: 'Submission errored',
    assistance_rule_submission_failed: 'Submission failed',
    assistance_rule_submission_passed_with_warnings: 'Submission passed with warnings',
    assistance_rule_these_expectations_failed: 'These expectations failed',
    assistance_rule_these_tests_failed: 'These test failed',
    assistance_rules: 'Assistance rules',
    authors: 'Authors',
    binding: 'Scope',
    black: 'Black',
    blockquote: 'Blockquote',
    blue: 'Blue',
    book_already_exists: 'Book {{fullName}} already exists',
    book_fork_fails: 'Something wrong happens while copying',
    book_forked_successfully: 'Book {{fullName}} copied successfully',
    book_saved_successfully: 'Book saved successfully',
    book: 'Book',
    books: 'Books',
    cancel: 'Cancel',
    chapter: 'Chapter',
    check_header_position: 'Check header position',
    choices: 'Choices',
    code_smell: 'Code Smell',
    code_smells: 'Code Smells',
    code: 'Code',
    collaborators: 'Credits',
    columns: 'Columns',
    complements: 'Complements',
    content_directive: 'Current solution',
    content: 'Content',
    copy_book_text: 'Select the organization to copy the book',
    copy_book: 'Copiar book to...',
    copy_guide_text: 'Select the organization to copy the guide',
    copy_guide: 'Copy guide to...',
    corollary: 'Corollary',
    custom_editor: 'Custom editor',
    default_content: 'Default code',
    delete: 'Delete',
    delete_confirm: 'Are you sure you want to delete "{{fullName}}"?',
    delete_success: '"{{fullName}}" was deleted successfully.',
    description: 'Description',
    details: 'View details',
    editor_type: 'Editor type',
    editor: 'Editor',
    english: 'English (UK)',
    error_assistance_rule_validation: '{{fullName}}: Has invalid assistance rules',
    error_choices_empty_validation: '{{fullName}}: Should have at least two choices',
    error_choices_incomplete_validation: '{{fullName}}: Has incomplete choices',
    error_editor_code_validation: '{{fullName}}: Should have at least one test, one expectation or evaluation should be manual',
    error_editor_hidden_validation: '{{fullName}}: Should have corollary and at least one test',
    error_editor_multiple_choice_validation: '{{fullName}}: Should have at least one choice selected',
    error_editor_single_choice_validation_no_selected: '{{fullName}}: Should not have choices selected',
    error_editor_single_choice_validation_only_one: '{{fullName}}: Shoud have only one choice selected',
    error_expectations_incomplete_validation: '{{fullName}}: Has incomplete expectations',
    error_forbidden_field: '{{ fullName }}: Can\'t include {{ field }}',
    error_mandatory_field: '{{ fullName }}: Field {{ field }} is mandatory',
    error_queriable_language_validation: '{{ exercise }}: Language {{ language }} does not support playground exercises',
    error_randomization_validation: '{{ fullName }}: Has incomplete randomizations',
    error_triable_language_validation: '{{ exercise }}: Language {{ language }} does not support interactive exercises',
    errored: "Oops, your solution doesn't work",
    evaluation: 'Evaluation',
    exercise_done: 'All our tests passed!',
    exercise_type: 'Exercise type',
    exercise: 'Exercise',
    expectation: 'Expectation',
    expectations: 'Expectations',
    extra_code: 'Extra code',
    extra_directive: 'Extra code',
    extra_visible: 'Show extra code',
    extra: 'Extra code',
    failed: 'Oops, something went wrong',
    final_state: 'Final state',
    free_form: 'Free Form',
    from: 'From',
    goal_last_query_equals: 'Last query equals...',
    goal_last_query_fails: 'Last query fails',
    goal_last_query_matches: 'Last query matches...',
    goal_last_query_output_includes: 'Last query output includes...',
    goal_last_query_output_like: 'Last query output like...',
    goal_last_query_outputs: 'Last query outputs...',
    goal_last_query_passes: 'Last query passes',
    goal_placeholder_kind: 'Choose goal kind',
    goal_placeholder_output: 'Expected output',
    goal_placeholder_query: 'Expected query',
    goal_placeholder_regexp: 'Regular expresion',
    goal_placeholder_value: 'Expected value',
    goal_query_fails: 'Query fails',
    goal_query_outputs: 'Query outputs...',
    goal_query_passes: 'Query passes',
    goal: 'Goal',
    gobstones_attire_incomplete: 'Some attire rules are incomplete',
    gobstones_attire: 'Attire',
    gobstones_toolbox_commands: 'Commands',
    gobstones_toolbox_my_functions: 'My functions',
    gobstones_toolbox_my_procedures: 'My procedures',
    gobstones_toolbox_put: 'Put',
    gobstones_toolbox: 'Toolbox',
    green: 'Green',
    guide_already_exists: 'Guide {{fullName}} already exists',
    guide_fork_fails: 'Something wrong happens while copying',
    guide_forked_successfully: 'Guide {{fullName}} copied successfully',
    guide_saved_successfully: 'Guide saved successfully',
    guide_type: 'Guide type',
    guide: 'Guide',
    guides: 'Guides',
    header_x: 'Position X',
    header_y: 'Position Y',
    here: 'here',
    hidden: 'Hidden',
    hint: 'Hint',
    ignore_content_directive: 'Ignore content on query',
    ignored_code_smells: 'Ignored code smells',
    import_guide_from_github: 'Enter organization and repository from github to import the guide',
    import: 'Import',
    initial_state: 'Initial state',
    insert_interpolation: 'Insert interpolation',
    insert_url: 'Insert the URL',
    inspection: 'Inspection',
    inspections: 'Inspections',
    interactive: 'Interactive',
    interpolation: 'Interpolation',
    item: 'Item',
    language: 'Language',
    layout: 'Editor layout',
    learning: 'Learning',
    leave_current_item_with_changes: 'Are you sure? all changes will be lost',
    lesson: 'Lesson',
    license_disclaimer: 'This guide will be published under <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode">Creative Commons Attribution-ShareAlike 4.0 International Public License</a>. To learn more about Creative Commons Licenses visit <a href="https://creativecommons.org/share-your-work">https://creativecommons.org/share-your-work</a>.',
    link: 'Link',
    locale: 'Locale',
    login: 'Log in',
    logout: 'Log out',
    malformed_document: '{{fullName}}: Must be in {{format}} format',
    manual_evaluation: 'Manual Evaluation',
    message: 'Message',
    multiple_choice: 'Multiple choice',
    multiple_files_new_name: 'Insert a file name',
    multiple_files: "Multiple files",
    name: 'Name',
    negated: 'Negated',
    new_book: 'New book',
    new_exercise: 'New exercise',
    new_guide: 'New guide',
    new_topic: 'New topic',
    no: 'No',
    object: 'Object',
    organization: 'Organization',
    passed_with_warnings: 'It worked, but you can do better',
    passed: 'All right',
    placeholder_add_chapter: 'Add chapter',
    placeholder_add_complement: 'Add complement',
    placeholder_add_lesson: 'Add lesson',
    placeholder_appendix: '...Enter appendix...',
    placeholder_authors: '...Full Name...',
    placeholder_book_name: '...Book name...',
    placeholder_collaborators: '...Enter credits...',
    placeholder_corollary: '...Enter corollary...',
    placeholder_default_content: '...Enter default content...',
    placeholder_description: '...Enter description...',
    placeholder_exercise_name: '...Exercise name...',
    placeholder_extra_code: '...Enter extra code...',
    placeholder_free_form: '...Enter free form as HTML...',
    placeholder_goal: '...Enter goal...',
    placeholder_guide_name: '...Guide name...',
    placeholder_hint: '...Enter hint...',
    placeholder_randomization_word: 'some_word',
    placeholder_solution: '...Enter solution to test...',
    placeholder_teacher_info: '...Enter teacher info...',
    placeholder_test: '...Enter tests...',
    placeholder_topic_name: '...Topic name...',
    placeholder_undefined: '',
    playground: 'Playground',
    portuguese: 'Portuguese (Br)',
    practice: 'Practice',
    previous_solution_directive: 'Previous solution',
    private: 'Hidden',
    problem: 'Problem',
    public: 'Visible',
    randomization_one_of: 'One of',
    randomization_range: 'Range',
    randomizations: 'Randomizations',
    reading: 'Reading',
    red: 'Red',
    relative_solution_directive: 'Previous exercise solution (relative reference)',
    remove: 'Remove',
    replace: 'Replace',
    repository: 'Repository',
    rows: 'Rows',
    rule: 'Rule',
    save: 'Save',
    saving: 'Saving...',
    search: 'Search',
    single_choice: 'Single choice',
    solution: 'Solution',
    spanish: 'Spanish (Arg)',
    subject: 'Subject',
    submit: 'Submit',
    tags: 'Tags',
    target: 'Subject',
    teacher_info: 'Teacher information',
    test_directive: 'Tests',
    test_input_method: 'Gobstones test input',
    test_results: 'Tests results',
    test_template_group_description: 'Group description',
    test_template_sample_description: 'Sample description',
    test_template_suite_description: 'Suite description',
    test: 'Tests',
    text: 'Text',
    then: 'Then',
    to: 'To',
    tooltip_bold: 'Bold (ctrl+b)',
    tooltip_code: 'Code',
    tooltip_emojis: 'Emojis',
    tooltip_gbs_attire: 'Gobstones Attire',
    tooltip_gbs_toolbox: 'Gobstones Blocks',
    tooltip_image: 'Image',
    tooltip_inline_code: 'Inline code',
    tooltip_italic: 'Italic (ctrl+i)',
    tooltip_link: 'Link (ctrl+k)',
    tooltip_mumuki: 'Mumuki (ctrl+m)',
    tooltip_ol: 'Ordered list',
    tooltip_quote: 'Quote',
    tooltip_ul: 'Unordered List',
    topic_saved_successfully: 'Topic saved successfully',
    topic: 'Topic',
    topics: 'Topics',
    transitive: 'Transitive',
    type: 'Type',
    unmeet_expectations: 'Goals that weren\'t met',
    upload_image_failed: 'You did not select any images or the selected image exceeds 256 KB',
    upload_image_placeholder: 'Insert image URL',
    upload_now: 'upload',
    upload_text_note: '* Remember: image size should be lower than 256 KB.',
    upload_text: 'Select an image from your computer clicking',
    upload: 'Upload file',
    user_email: 'User\'s email',
    user_first_name: 'User\'s first name',
    user_last_name: 'User\'s last name',
    verb: 'Verb',
    when: 'When',
    with: 'With',
    yes: 'Yes',

  });
