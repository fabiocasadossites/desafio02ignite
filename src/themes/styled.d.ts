import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            header: string,
            background: string,

            input: string,
            input_button: string,
            input_text: string,
            
            text: string,
            text_header: string,
            text_task: string,
            text_task_done: string,
        
            task_done_background: string,
            task_marker: string,
            task_marker_done: string,
        }
    }
}
