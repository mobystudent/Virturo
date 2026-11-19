<template>
  <section class="jobs-grid">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="title">
            Open Positions
          </h2>
          <p class="description">
            Explore our current job openings in London and remotely. Discover where your skills and
            aspirations align with our opportunities.
          </p>
        </div>
        <div class="col">
          <div class="block-blog-filter">
            <div class="filter-item">
              <a
                href="#"
                class="filter-link"
                :class="{ active: !selectedCategory }"
                @click.prevent="filterByCategory(null)"
              >View all</a>
            </div>
            <div class="filter-item">
              <a
                href="#"
                class="filter-link"
                :class="{ active: selectedCategory === 'Compliance' }"
                @click.prevent="filterByCategory('Compliance')"
              >Compliance</a>
            </div>
            <div class="filter-item">
              <a
                href="#"
                class="filter-link"
                :class="{ active: selectedCategory === 'Analysis' }"
                @click.prevent="filterByCategory('Analysis')"
              >Analysis</a>
            </div>
            <div class="filter-item">
              <a
                href="#"
                class="filter-link"
                :class="{ active: selectedCategory === 'Operations' }"
                @click.prevent="filterByCategory('Operations')"
              >Operations</a>
            </div>
          </div>

          <div class="inner">
            <NuxtLink
              v-for="(item, index) in filteredJobs"
              :key="index"
              :to="item.link"
            >
              <div class="item">
                <div>
                  <h3>{{ item.title }}</h3>
                </div>
                <div>
                  <div class="details">
                    <div class="category">
                      <span>{{ item.category }}</span>
                    </div>
                    <span>|</span>
                    <div class="place">
                      <span>{{ item.place }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'JobGridSection',
  data() {
    return {
      selectedCategory: null,
      jobs: [
        {
          title: 'Senior Customer Success Manager',
          category: 'Compliance',
          place: 'London',
          time: 'Full-time',
          desc: 'We are looking Specialist.',
          link: '/careers/job-senior-customer-success-manager/',
        },
        {
          title: 'Trading Analyst',
          category: 'Analysis',
          place: 'London',
          time: 'Full-time',
          desc: 'We are looking Specialist.',
          link: '/careers/job-trading-analyst/',
        },
        {
          title: 'Due Diligence Agent',
          category: 'Operations',
          place: 'London',
          time: 'Full-time',
          desc: 'We are looking Specialist.',
          link: '/careers/job-due-diligence-agent/',
        },
        {
          title: 'Remote Trading Operations Specialist',
          category: 'Operations',
          place: 'London / Remote',
          time: 'Full-time',
          desc: 'We are looking Specialist.',
          link: '/careers/job-remote-trading-operations-specialist/',
        },
        {
          title: 'Analytics Manager - Marketing Acquisition',
          category: 'Analysis',
          place: 'London',
          time: 'Full-time',
          desc: 'We are looking Specialist.',
          link: '/careers/job-analytics-manager/',
        },
      ],
    };
  },
  computed: {
    filteredJobs() {
      return this.selectedCategory
        ? this.jobs.filter((job) => job.category === this.selectedCategory)
        : this.jobs;
    },
  },
  methods: {
    filterByCategory(category) {
      this.selectedCategory = category;
    },
  },
};
</script>

<style lang="scss" scoped>
.jobs-grid {
  padding: 60px 0;
  background-color: #ECECE4;

  .title {
    margin-bottom: 26px;
    color: #352F44;
    font-family: "Poppins";
    font-size: 52px;
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;
    text-transform: capitalize;

    @media (max-width: 768px) {
      font-size: 32px;
      line-height: 120%;
      /* 38.4px */
    }
  }

  .description {
    margin: 0 auto;
    margin-bottom: 40px;
    max-width: 416px;
    color: #000;
    font-family: "Poppins";
    font-size: 16px;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    @media (max-width: 768px) {
      margin-bottom: 16px;
      max-width: none;
    }
  }

  .row {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    gap: 0 54px;

    @media (max-width: 1200px) {
      flex-flow: column;
    }

    @media (max-width: 768px) {
      flex-flow: column;
      gap: 0;
    }

    .col:nth-child(2) {
      max-width: 740px;
      width: 100%;
      @media (max-width: 1200px) {
        max-width: none;
      }
    }
  }
}

.container {
  max-width: 1340px;
  margin: 0 auto;
  padding: 0 30px;
}

.inner {
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 0;

  @media (max-width: 768px) {
    padding-right: 16px;
  }

  &>a,
  a.nuxt-link-exact-active {
    display: block;
    width: 100%;
  }

  .item {
    background: #fff;
    padding: 24px 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;

    @media (max-width: 768px) {
      padding: 10px 16px;
    }

    &:hover {
      background-color: #D3F5EC;
      cursor: pointer;
    }

    h3 {
      font-weight: 500;
      font-size: 16px;
      font-family: "Poppins";
      line-height: 140%; /* 22.4px */
      color: #352F44;

      @media (max-width: 768px) {
        margin-bottom: 12px;
      }
    }

    p {
      font-family: "Poppins";
      font-size: 16px;
      font-weight: 400;
      line-height: 140%; /* 22.4px */
      color: #352F44;
    }

    .details {
      display: flex;

      .category {
        display: flex;
        align-items: center;
        margin-right: 12px;
      }

      .place {
        display: flex;
        align-items: center;
        margin-left: 12px;
      }

      .icon {
        margin-right: 4px;
      }

      span {
        font-family: "Poppins";
        font-size: 16px;
        font-weight: 400;
        line-height: 140%; /* 22.4px */
        color: #352F44;
      }
    }
  }
}

@media (max-width: 992px) {
  .container {
    padding: 0 20px;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0;

    .col:nth-child(1) {
      padding: 0 16px;
    }

    .col:nth-child(2) {
      padding-left: 16px;
    }
  }

  .jobs-grid {
    padding: 40px 0px;

    .item {
      width: 100%;
      flex-flow: column;
    }
  }
}

/* Filter */
.block-blog-filter {
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  // justify-content: center;
  align-items: center;
  gap: 16px;

  .filter-link {
    margin: 0 0 0px;
    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #fff;
    color: #352F44;
    font-size: 16px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    transition: color 0.4s ease, background-color 0.4s ease;

    &:hover {
      background-color: #D3F5EC;
      border-color: #D3F5EC;
      color: #352F44;
    }

    &.active {
      color: #FFF;
      background-color: #352F44;
    }
  }
}

@media (max-width: 998px) {
  .block-blog-filter {
    margin: 0 0 40px;
    // margin-right: 16px;
    padding-right: 16px;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;

    .filter-link {
      margin: 5px 0;
    }
  }

  .filter-item {
    flex: 0 0 auto;
  }
}
</style>
