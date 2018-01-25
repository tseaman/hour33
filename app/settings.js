"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theme = {
    // Red
    accentColor: '#d50000',
    // Teal
    // accentColor: '#4CCAFF',
    primaryColor: '#212121',
    lightGrey: '#6d6d6d',
    darkGrey: '#3D3638',
    pageBackgroundColor: '#1b1819',
    actionBarTextColor: '#FFF',
    inactiveColor: '#FFF',
    // greenColor: '#3cba54',
    greenColor: '#00C800',
    // yellowColor: '#f4c20d',    
    yellowColor: '#FAE300'
};
exports.GooglePlacesAPIKey = "AIzaSyDbY1JhYKBsuzW80PFMjWa2Pg3QMveBNSM";
exports.Debug = {
    console: {
        // APIs
        Firebase: {
            fullUser: false,
            email: true
        },
        Geolocation: {
            init: true
        },
        // Services
        GoogleLocation: {
            url: true,
            data: true,
            error: true
        },
        Vendor: true,
        // Components
        AppComponent: true,
        // Pipes
        CurrentDayPipe: false
    },
    display: {
        SearchComponent: false
    },
    fps: false,
    backgroundColor: false
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsS0FBSyxHQUFFO0lBQ2hCLE1BQU07SUFDTixXQUFXLEVBQUUsU0FBUztJQUN0QixPQUFPO0lBQ1AsMEJBQTBCO0lBQzFCLFlBQVksRUFBRSxTQUFTO0lBQ3ZCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFFBQVEsRUFBRSxTQUFTO0lBQ25CLG1CQUFtQixFQUFFLFNBQVM7SUFDOUIsa0JBQWtCLEVBQUUsTUFBTTtJQUMxQixhQUFhLEVBQUUsTUFBTTtJQUN0Qix5QkFBeUI7SUFDeEIsVUFBVSxFQUFFLFNBQVM7SUFDdEIsOEJBQThCO0lBQzdCLFdBQVcsRUFBRSxTQUFTO0NBQ3pCLENBQUE7QUFFWSxRQUFBLGtCQUFrQixHQUFHLHlDQUF5QyxDQUFDO0FBRS9ELFFBQUEsS0FBSyxHQUFHO0lBQ2pCLE9BQU8sRUFBRTtRQUNMLE9BQU87UUFDUCxRQUFRLEVBQUU7WUFDTixRQUFRLEVBQUUsS0FBSztZQUNmLEtBQUssRUFBRSxJQUFJO1NBQ2Q7UUFDRCxXQUFXLEVBQUU7WUFDVCxJQUFJLEVBQUUsSUFBSTtTQUNiO1FBQ0QsV0FBVztRQUNYLGNBQWMsRUFBRTtZQUNaLEdBQUcsRUFBRSxJQUFJO1lBQ1QsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsSUFBSTtTQUNkO1FBQ0QsTUFBTSxFQUFFLElBQUk7UUFDWixhQUFhO1FBQ2IsWUFBWSxFQUFFLElBQUk7UUFDbEIsUUFBUTtRQUNSLGNBQWMsRUFBRSxLQUFLO0tBQ3hCO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsZUFBZSxFQUFFLEtBQUs7S0FDekI7SUFDRCxHQUFHLEVBQUUsS0FBSztJQUNWLGVBQWUsRUFBRSxLQUFLO0NBQ3pCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVGhlbWUgPXtcclxuICAgIC8vIFJlZFxyXG4gICAgYWNjZW50Q29sb3I6ICcjZDUwMDAwJyxcclxuICAgIC8vIFRlYWxcclxuICAgIC8vIGFjY2VudENvbG9yOiAnIzRDQ0FGRicsXHJcbiAgICBwcmltYXJ5Q29sb3I6ICcjMjEyMTIxJyxcclxuICAgIGxpZ2h0R3JleTogJyM2ZDZkNmQnLFxyXG4gICAgZGFya0dyZXk6ICcjM0QzNjM4JyxcclxuICAgIHBhZ2VCYWNrZ3JvdW5kQ29sb3I6ICcjMWIxODE5JyxcclxuICAgIGFjdGlvbkJhclRleHRDb2xvcjogJyNGRkYnLFxyXG4gICAgaW5hY3RpdmVDb2xvcjogJyNGRkYnLFxyXG4gICAvLyBncmVlbkNvbG9yOiAnIzNjYmE1NCcsXHJcbiAgICBncmVlbkNvbG9yOiAnIzAwQzgwMCcsXHJcbiAgIC8vIHllbGxvd0NvbG9yOiAnI2Y0YzIwZCcsICAgIFxyXG4gICAgeWVsbG93Q29sb3I6ICcjRkFFMzAwJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR29vZ2xlUGxhY2VzQVBJS2V5ID0gXCJBSXphU3lEYlkxSmhZS0JzdXpXODBQRk1qV2EyUGczUU12ZUJOU01cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBEZWJ1ZyA9IHtcclxuICAgIGNvbnNvbGU6IHtcclxuICAgICAgICAvLyBBUElzXHJcbiAgICAgICAgRmlyZWJhc2U6IHtcclxuICAgICAgICAgICAgZnVsbFVzZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBlbWFpbDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgR2VvbG9jYXRpb246IHtcclxuICAgICAgICAgICAgaW5pdDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gU2VydmljZXNcclxuICAgICAgICBHb29nbGVMb2NhdGlvbjoge1xyXG4gICAgICAgICAgICB1cmw6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGE6IHRydWUsXHJcbiAgICAgICAgICAgIGVycm9yOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBWZW5kb3I6IHRydWUsXHJcbiAgICAgICAgLy8gQ29tcG9uZW50c1xyXG4gICAgICAgIEFwcENvbXBvbmVudDogdHJ1ZSxcclxuICAgICAgICAvLyBQaXBlc1xyXG4gICAgICAgIEN1cnJlbnREYXlQaXBlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGRpc3BsYXk6IHtcclxuICAgICAgICBTZWFyY2hDb21wb25lbnQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZnBzOiBmYWxzZSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogZmFsc2VcclxufVxyXG4iXX0=