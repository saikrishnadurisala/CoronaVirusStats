export class GlobalStatastics{
    public total_cases: string='';
    public recovery_cases: string='';
    public death_cases: string='';
    public last_update: Date=null;
    public currently_infected: string='';
    public cases_with_outcome : string='';
    public mild_condition_active_cases: string='';
    public critical_condition_active_cases: string='';
    public recovered_closed_cases: string='';
    public death_closed_cases: string='';
    public closed_cases_recovered_percentage: string='';
    public closed_cases_death_percentage: string='';
    public active_cases_mild_percentage: string='';
    public active_cases_critical_percentage: string='';
    public general_death_rate: number=0;
    constructor(){}
}

export class GlobalStatasticsResponse{
    public data: GlobalStatastics=new GlobalStatastics();
    public success: boolean=true;
}